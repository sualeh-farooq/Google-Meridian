import { useState } from 'react';
import { Calendar } from 'lucide-react';

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minDate?: string;
}

export default function CustomDatePicker({ 
  value, 
  onChange, 
  placeholder = "Select date",
  minDate 
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : new Date());
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const isDateDisabled = (day: number) => {
    if (!minDate) return false;
    const dateToCheck = new Date(currentYear, currentMonth, day);
    const minDateObj = new Date(minDate);
    return dateToCheck < minDateObj;
  };

  const handleDateSelect = (day: number) => {
    if (isDateDisabled(day)) return;
    
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    onChange(newDate.toISOString().split('T')[0]);
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleToday = () => {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setSelectedDate(today);
    onChange(today.toISOString().split('T')[0]);
    setIsOpen(false);
  };

  const days = [];
  
  // Empty cells for days before month starts
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-10"></div>);
  }
  
  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const isSelected = value && 
                       new Date(value).getDate() === day && 
                       new Date(value).getMonth() === currentMonth &&
                       new Date(value).getFullYear() === currentYear;
    
    const isToday = new Date().getDate() === day && 
                    new Date().getMonth() === currentMonth &&
                    new Date().getFullYear() === currentYear;
    
    const disabled = isDateDisabled(day);
    
    days.push(
      <button
        key={day}
        type="button"
        onClick={() => handleDateSelect(day)}
        disabled={disabled}
        className={`h-10 w-10 rounded-lg flex items-center justify-center text-sm transition-colors
          ${disabled ? 'text-gray-300 cursor-not-allowed' :
            isSelected ? 'bg-blue-900 text-white font-medium' : 
            isToday ? 'bg-blue-100 text-blue-900 font-medium' : 
            'hover:bg-gray-100 text-gray-700'}`}
      >
        {day}
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2.5 pr-10 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 outline-none transition bg-white text-left"
      >
        <span className={value ? 'text-gray-900' : 'text-gray-400'}>
          {value ? formatDate(new Date(value)) : placeholder}
        </span>
      </button>
      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Calendar Popup */}
          <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 w-80">
            {/* Header - Month Navigation */}
            <div className="flex items-center justify-between mb-4">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="p-1 hover:bg-gray-100 rounded transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="font-medium text-gray-900">
                {monthNames[currentMonth]} {currentYear}
              </div>
              
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-1 hover:bg-gray-100 rounded transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div 
                  key={day} 
                  className="h-10 flex items-center justify-center text-xs font-medium text-gray-500"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days Grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {days}
            </div>

            {/* Footer - Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleToday}
                className="px-4 py-2 text-sm bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
              >
                Today
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}