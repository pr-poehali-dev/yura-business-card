import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactInfo = () => {
  const contacts = [
    {
      icon: "Mail",
      label: "Email",
      value: "alexander@example.com",
      href: "mailto:alexander@example.com",
    },
    {
      icon: "Phone",
      label: "Телефон",
      value: "+7 (999) 123-45-67",
      href: "tel:+79991234567",
    },
    {
      icon: "MapPin",
      label: "Город",
      value: "Москва, Россия",
      href: "#",
    },
    {
      icon: "Globe",
      label: "Сайт",
      value: "alexander-dev.ru",
      href: "https://alexander-dev.ru",
    },
  ];

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-purple-50 to-white shadow-lg">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 font-montserrat">
          Контакты
        </h2>

        <div className="space-y-3">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Icon
                    name={contact.icon}
                    size={18}
                    className="text-purple-600"
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-500 font-medium">
                  {contact.label}
                </p>
                <p className="text-gray-800 font-medium truncate">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactInfo;
