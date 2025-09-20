import StudentCard from "@/components/StudentCard";

const Index = () => {
  const students = [
    {
      name: "Alice Johnson",
      age: 20,
      course: "Computer Science"
    },
    {
      name: "Bob Smith",
      age: 19,
      course: "Mathematics"
    },
    {
      name: "Carol Davis",
      age: 21,
      course: "Physics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Student Card
            </h1>
            <p className="text-lg text-muted-foreground">
              Meet our talented students
            </p>
          </div>
        </div>
      </header>

      {/* Student Cards Grid */}
      <main className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {students.map((student, index) => (
              <StudentCard
                key={index}
                name={student.name}
                age={student.age}
                course={student.course}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
