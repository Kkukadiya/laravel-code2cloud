import { useState, useMemo } from 'react';
import { Calendar, Clock, Video, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isBefore, startOfDay } from 'date-fns';

const allAvailableTimes = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', 
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM',
  '11:00 PM', '11:30 PM', '12:00 AM'
];

// Convert time string to minutes since midnight for comparison
const timeToMinutes = (timeStr: string): number => {
  const [time, period] = timeStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;
  // Handle midnight (12:00 AM) as end of day (1440 minutes)
  if (hours === 0 && minutes === 0) return 24 * 60;
  return hours * 60 + minutes;
};

const CalendlySection = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const today = startOfDay(new Date());
  
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Get the day of week for the first day (0 = Sunday, 1 = Monday, etc.)
  const startDay = monthStart.getDay();
  // Convert to Monday-first (0 = Monday, 6 = Sunday)
  const adjustedStartDay = startDay === 0 ? 6 : startDay - 1;

  // Filter available times based on selected date
  const availableTimes = useMemo(() => {
    if (!selectedDate) return allAvailableTimes;
    
    // If selected date is today, filter out past times
    if (isToday(selectedDate)) {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      return allAvailableTimes.filter(time => timeToMinutes(time) > currentMinutes);
    }
    
    // For future dates, show all times
    return allAvailableTimes;
  }, [selectedDate]);

  const handlePrevMonth = () => {
    const prevMonth = subMonths(currentMonth, 1);
    // Don't allow going to past months
    if (!isBefore(endOfMonth(prevMonth), today)) {
      setCurrentMonth(prevMonth);
    }
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDateSelect = (date: Date) => {
    if (!isBefore(date, today)) {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  const handleScheduleCall = () => {
    // Redirect to Calendly
    window.open('https://calendly.com/your-calendar-url', '_blank');
  };

  const isDateDisabled = (date: Date) => {
    return isBefore(date, today);
  };

  const isDateSelected = (date: Date) => {
    return selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
  };

  const canGoPrevMonth = !isBefore(endOfMonth(subMonths(currentMonth, 1)), today);

  return (
    <section className="py-16 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                Get Started
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Ready to Talk About
                <br />
                Your Project?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Book a 30-minute call with our team. We will discuss your goals, timeline, and budget — and give you an honest assessment of what it takes to get there.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <span className="text-foreground font-medium">Pick a time that works for you</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <span className="text-foreground font-medium">30 minutes, no commitment</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Video className="w-6 h-6 text-accent" />
                </div>
                <span className="text-foreground font-medium">Video call or phone, your choice</span>
              </div>
            </div>

            <Button 
              variant="coral" 
              size="lg" 
              className="group"
              onClick={handleScheduleCall}
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Calendar Side */}
          <div className="bg-card rounded-3xl shadow-xl border border-border/50 overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">Free Discovery Call</h3>
                  <p className="text-muted-foreground text-sm">30 minutes with our team</p>
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="p-6">
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-display font-semibold text-lg text-foreground">
                  {format(currentMonth, 'MMMM yyyy')}
                </h4>
                <div className="flex gap-2">
                  <button 
                    onClick={handlePrevMonth}
                    disabled={!canGoPrevMonth}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleNextMonth}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Weekday Headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {/* Empty cells for days before month starts */}
                {Array.from({ length: adjustedStartDay }).map((_, index) => (
                  <div key={`empty-${index}`} className="aspect-square" />
                ))}
                
                {/* Month days */}
                {daysInMonth.map((date) => {
                  const disabled = isDateDisabled(date);
                  const selected = isDateSelected(date);
                  const current = isToday(date);
                  
                  return (
                    <button
                      key={date.toISOString()}
                      onClick={() => handleDateSelect(date)}
                      disabled={disabled}
                      className={`
                        aspect-square rounded-full flex items-center justify-center text-sm font-medium transition-all
                        ${disabled 
                          ? 'text-muted-foreground/40 cursor-not-allowed' 
                          : 'hover:bg-accent/10 cursor-pointer'
                        }
                        ${selected 
                          ? 'bg-accent text-accent-foreground hover:bg-accent' 
                          : ''
                        }
                        ${current && !selected 
                          ? 'text-accent font-bold' 
                          : ''
                        }
                        ${!disabled && !selected 
                          ? 'text-foreground' 
                          : ''
                        }
                      `}
                    >
                      {format(date, 'd')}
                    </button>
                  );
                })}
              </div>

              {/* Available Times */}
              {selectedDate && (
                <div className="mt-6 pt-6 border-t border-border/50">
                  <h5 className="font-medium text-foreground mb-4">Available times</h5>
                  {availableTimes.length > 0 ? (
                    <div className="max-h-48 overflow-y-auto pr-2 scrollbar-thin">
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`
                              px-3 py-2 rounded-lg border text-xs sm:text-sm font-medium transition-all
                              ${selectedTime === time
                                ? 'bg-accent text-accent-foreground border-accent'
                                : 'border-accent text-accent hover:bg-accent/10'
                              }
                            `}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-sm">No available times remaining for today. Please select another date.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -z-10 top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-20 left-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
    </section>
  );
};

export default CalendlySection;
