import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, User, Calendar } from "lucide-react";

interface StudentCardProps {
  name: string;
  age: number;
  course: string;
}

const StudentCard = ({ name, age, course }: StudentCardProps) => {
  return (
    <Card className="relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
      
      <div className="relative p-6">
        {/* Header with Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-sm">
            <User className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-card-foreground truncate">
              {name}
            </h3>
          </div>
        </div>

        {/* Student Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm font-medium">{age} years old</span>
          </div>
          
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
            <Badge variant="secondary" className="text-sm font-medium">
              {course}
            </Badge>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-primary opacity-60"></div>
      </div>
    </Card>
  );
};

export default StudentCard;