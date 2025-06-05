import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: "Github",
      href: "https://github.com",
      color: "hover:bg-gray-100 hover:text-gray-800",
    },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      href: "https://linkedin.com",
      color: "hover:bg-blue-50 hover:text-blue-600",
    },
    {
      name: "Telegram",
      icon: "Send",
      href: "https://t.me/",
      color: "hover:bg-blue-50 hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: "Twitter",
      href: "https://twitter.com",
      color: "hover:bg-blue-50 hover:text-blue-400",
    },
  ];

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-4 text-center font-montserrat">
          Социальные сети
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              asChild
              className="bg-white/10 hover:bg-white/20 text-white border-0 h-12 transition-all duration-200 hover:scale-105"
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2"
              >
                <Icon name={social.icon} size={18} />
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            </Button>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-purple-100 text-xs">
            Свяжитесь со мной в любой удобной социальной сети
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialLinks;
