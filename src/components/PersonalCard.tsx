import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const PersonalCard = () => {
  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-8 text-center">
        <div className="mb-6">
          <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-purple-100">
            <AvatarImage
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              alt="Профиль"
            />
            <AvatarFallback className="text-2xl bg-gradient-to-br from-purple-400 to-purple-600 text-white">
              АИ
            </AvatarFallback>
          </Avatar>

          <h1 className="text-2xl font-bold text-gray-800 mb-2 font-montserrat">
            Александр Иванов
          </h1>

          <p className="text-purple-600 font-medium mb-1">
            Senior Frontend Developer
          </p>

          <p className="text-gray-500 text-sm">React • TypeScript • Node.js</p>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <p className="text-gray-600 text-sm leading-relaxed">
            Создаю современные веб-приложения с фокусом на пользовательский
            опыт. Более 5 лет опыта разработки.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalCard;
