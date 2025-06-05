import PersonalCard from "@/components/PersonalCard";
import ContactInfo from "@/components/ContactInfo";
import SkillsSection from "@/components/SkillsSection";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок страницы */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 font-montserrat">
            Моя визитка
          </h1>
          <p className="text-gray-600">
            Добро пожаловать! Узнайте больше обо мне
          </p>
        </div>

        {/* Основная сетка компонентов */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Левая колонка */}
          <div className="space-y-8">
            <PersonalCard />
            <SkillsSection />
          </div>

          {/* Правая колонка */}
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>

        {/* Подвал */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © 2024 Александр Иванов. Создано с ❤️ на React
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
