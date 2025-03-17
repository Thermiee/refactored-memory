import { useNavigate, useLocation } from 'react-router-dom';
import { sidebarLinks } from './data';
import SidebarLayout from './SidebarLayout';


const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const activeLink = useLocation().pathname.split('/');
    

    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                {sidebarLinks.map(({ id, title, image, url }) => (
                    <div
                        onClick={() => navigate(url)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={() => navigate(url)}
                        key={id}
                        className="py-[1px]"
                        style={{
                            background: url === activeLink[2]
                                ? 'linear-gradient(270deg, #FFF -47.16%, rgba(255, 255, 255, 0.00) 72.88%)'
                                : '',
                        }}
                    >
                        <SidebarLayout title={title} image={image} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;