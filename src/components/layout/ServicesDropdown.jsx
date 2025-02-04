import { Link, useLocation, useNavigate } from 'react-router-dom';

const ServicesDropdown = ({ setShowServices }) => {
  const services = [
    {
      title: 'Web Development',
      path: '/services/web-development',
      icon: '🌐'
    },
    {
      title: 'App Development',
      path: '/services/app-development',
      icon: '📱'
    },
    {
      title: 'Web Design',
      path: '/services/web-design',
      icon: '🎨'
    },
    {
      title: 'Digital Marketing',
      path: '/services/digital-marketing',
      icon: '📈'
    },
    {
      title: 'Staffing',
      path: '/services/staffing',
      icon: '👥'
    }
  ];

  return (
    <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl py-2 mt-2">
      {services.map((service) => (
        <Link
          key={service.path}
          to={service.path}
          onClick={() => setShowServices(false)}
          className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
        >
          <span className="text-xl mr-3">{service.icon}</span>
          <span className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            {service.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default ServicesDropdown; 