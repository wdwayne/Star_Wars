import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';
import './style.css'


function Breadcrums() {

    const routes = [
        { path: '/', breadcrumb: 'All Cards' },
        { path: "/:name Details", breadcrumb:"" },
      ];

    const breadcrumbs = useBreadcrumbs(routes);


    return (
        <div>
        {breadcrumbs.map(({ breadcrumb }) => (
        <Link key={breadcrumb.key} className="breadcrumb" to={breadcrumb.key}>
          {breadcrumb}
        </Link>
      ))}
        </div>
    )
}

export default Breadcrums;
