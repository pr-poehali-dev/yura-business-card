import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skills = [
    { name: "React", level: 95, color: "bg-blue-500" },
    { name: "TypeScript", level: 90, color: "bg-blue-600" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "Python", level: 80, color: "bg-yellow-500" },
    { name: "UI/UX Design", level: 75, color: "bg-purple-500" },
  ];

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 font-montserrat">
          Навыки
        </h2>

        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>

              <Progress
                value={skill.level}
                className="h-2 bg-gray-100 group-hover:bg-gray-200 transition-colors"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            Постоянно изучаю новые технологии
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
