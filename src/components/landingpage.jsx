import { FaMapMarkerAlt, FaCalendarAlt, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Image from '../assets/3d-casual-life-trail-map.png';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full py-6 bg-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Locsafe™</h1>
          <nav>
            <ul className="flex items-center space-x-8 text-gray-600 font-medium">
              <li>
                <a href="#" className="hover:text-gray-800">Features</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">Pricing</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">Contact</a>
              </li>
              <li>
                <Link to="/admin/dashboard" className="hover:text-gray-800 bg-indigo-500 p-4 rounded">Login</Link>
              </li> 
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto my-16 flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-8">Track your vehicles with ease</h2>
          <p className="text-gray-700 text-xl mb-8">
            Locsafe is a GPS fleet tracking and management system that helps you keep track of your vehicles in real-time.
          </p>
          <div className="flex items-center space-x-4 text-gray-700 font-medium mb-8">
            <FaMapMarkerAlt className="text-2xl text-blue-500" />
            <p>Track your vehicles anywhere in the world</p>
          </div>
          <div className="flex items-center space-x-4 text-gray-700 font-medium mb-8">
            <FaCalendarAlt className="text-2xl text-blue-500" />
            <p>Set up custom alerts and notifications</p>
          </div>
          <div className="flex items-center space-x-4 text-gray-700 font-medium">
            <FaCheck className="text-2xl text-blue-500" />
            <p>Easy-to-use interface and intuitive dashboard</p>
          </div>
        </div>
        <div className="md:w-1/2">
          {/*<svg viewBox="0 0 974.883 1937.145" className="w-full" height="340" xmlns="http://www.w3.org/2000/svg"><path d="m554.121 1876.279c-.611 0-1.232-.113-1.835-.351l-549.122-216.844c-1.233-.487-2.223-1.444-2.75-2.661-.528-1.216-.551-2.593-.063-3.826l68.18-172.654c.487-1.233 1.444-2.223 2.661-2.75 1.216-.528 2.593-.551 3.826-.063l549.123 216.844c1.233.487 2.223 1.444 2.75 2.661.528 1.216.551 2.593.063 3.826l-68.18 172.654c-.776 1.965-2.66 3.165-4.652 3.165zm-542.634-224.659 539.822 213.171 64.507-163.353-539.822-213.171z" fill="#fcae1d"/><path d="m403.376 1321.812h367.934v157.998h-367.934z" fill="#c0d625" transform="matrix(.3672968 -.93010379 .93010379 .3672968 -931.285 1432.597)"/><path d="m256.491 958.877h138.533v138.533h-138.533z" fill="#fdc93a" transform="matrix(.90565762 -.42400975 .42400975 .90565762 -405.213 235.125)"/><path d="m165.393 760.715h138.533v138.533h-138.533z" fill="#fdc93a" transform="matrix(.90565762 -.42400975 .42400975 .90565762 -329.784 177.803)"/><path d="m971.146 552.58-299.221-118.16 148.281-34.578 133.329-31.091z" fill="#c0d625"/><path d="m60.597 356.723h389.598v176.284h-389.598z" fill="#b2bceb" transform="matrix(.3672968 -.93010379 .93010379 .3672968 -252.18 519.015)"/><path d="m865.487 864.42c-.611 0-1.232-.113-1.835-.351l-396.649-156.634c-1.233-.487-2.223-1.444-2.75-2.661-.528-1.217-.551-2.593-.063-3.826l86.096-218.024c1.014-2.568 3.916-3.83 6.487-2.814l396.649 156.633c1.233.487 2.223 1.444 2.75 2.661.528 1.216.551 2.593.063 3.826l-86.096 218.024c-.776 1.966-2.66 3.165-4.652 3.165zm-390.161-164.449 387.348 152.961 82.423-208.723-387.348-152.96-82.423 208.723z" fill="#fcae1d"/><g fill="#b2bceb"><path d="m907.054 307.324c-2.265 0-4.317-1.55-4.861-3.85-.636-2.687 1.027-5.381 3.715-6.017l20.436-4.834c2.685-.634 5.381 1.027 6.017 3.715.636 2.687-1.027 5.381-3.715 6.017l-20.436 4.834c-.387.092-.774.135-1.155.135z"/><path d="m601.313 373.353c-.571 0-1.152-.099-1.72-.307l-42.195-15.462c-2.593-.95-3.925-3.822-2.975-6.415s3.824-3.925 6.415-2.975l42.195 15.462c2.593.95 3.925 3.822 2.975 6.415-.742 2.025-2.657 3.281-4.695 3.281zm43.348-3.964c-2.265 0-4.317-1.55-4.861-3.85-.636-2.687 1.027-5.381 3.715-6.017l43.732-10.344c2.684-.636 5.381 1.027 6.017 3.715.636 2.687-1.027 5.381-3.715 6.017l-43.732 10.344c-.387.092-.774.135-1.155.135zm87.464-20.688c-2.265 0-4.317-1.55-4.861-3.85-.636-2.687 1.027-5.381 3.715-6.017l43.732-10.344c2.686-.635 5.381 1.027 6.017 3.715.636 2.687-1.027 5.381-3.715 6.017l-43.732 10.344c-.387.092-.774.135-1.155.135zm87.464-20.688c-2.265 0-4.317-1.55-4.861-3.85-.636-2.687 1.027-5.381 3.715-6.017l43.732-10.344c2.684-.635 5.381 1.027 6.017 3.715.636 2.687-1.027 5.381-3.715 6.017l-43.732 10.344c-.387.092-.774.135-1.155.135z"/><path d="m489.49 354.737c-.611 0-1.232-.113-1.835-.351-2.568-1.014-3.828-3.918-2.814-6.487l7.713-19.532c.996-2.524 3.823-3.792 6.371-2.858l19.718 7.225c2.593.95 3.925 3.822 2.975 6.415s-3.821 3.925-6.415 2.975l-15.139-5.547-5.922 14.996c-.776 1.966-2.66 3.165-4.652 3.165z"/><path d="m368.983 659.901c-.611 0-1.232-.113-1.835-.351-2.568-1.014-3.828-3.919-2.814-6.487l15.063-38.146c1.014-2.568 3.917-3.829 6.487-2.814 2.568 1.014 3.828 3.919 2.814 6.487l-15.063 38.146c-.776 1.966-2.66 3.165-4.652 3.165zm30.127-76.291c-.611 0-1.232-.113-1.835-.351-2.568-1.014-3.828-3.919-2.814-6.487l15.063-38.145c1.014-2.568 3.917-3.829 6.487-2.814 2.568 1.014 3.828 3.919 2.814 6.487l-15.063 38.145c-.776 1.966-2.66 3.165-4.652 3.165zm30.126-76.291c-.611 0-1.232-.113-1.835-.351-2.568-1.014-3.828-3.919-2.814-6.487l15.063-38.146c1.014-2.568 3.917-3.829 6.487-2.814 2.568 1.014 3.828 3.918 2.814 6.487l-15.063 38.146c-.776 1.966-2.66 3.165-4.652 3.165zm30.127-76.291c-.611 0-1.232-.113-1.835-.351-2.568-1.014-3.828-3.919-2.814-6.487l15.063-38.146c1.014-2.569 3.919-3.827 6.487-2.814 2.568 1.014 3.828 3.919 2.814 6.487l-15.063 38.146c-.776 1.966-2.66 3.165-4.652 3.165z"/><path d="m355.041 736.632c-1.888 0-3.694-1.074-4.54-2.899l-8.829-19.054c-.576-1.242-.617-2.665-.114-3.938l7.713-19.532c1.014-2.568 3.917-3.828 6.487-2.814 2.568 1.014 3.828 3.919 2.814 6.487l-6.925 17.539 7.928 17.109c1.161 2.506.071 5.478-2.435 6.639-.68.315-1.396.465-2.099.465z"/><path d="m500.594 1050.738c-1.888 0-3.694-1.074-4.54-2.899l-18.194-39.264c-1.161-2.505-.071-5.478 2.435-6.639 2.505-1.161 5.478-.071 6.639 2.434l18.194 39.264c1.161 2.505.071 5.478-2.435 6.639-.68.315-1.396.465-2.099.465zm-36.388-78.527c-1.888 0-3.694-1.074-4.54-2.899l-18.194-39.263c-1.161-2.506-.071-5.478 2.435-6.639 2.505-1.16 5.478-.071 6.639 2.434l18.194 39.263c1.161 2.506.071 5.478-2.435 6.639-.68.315-1.396.465-2.099.465zm-36.389-78.526c-1.888 0-3.694-1.074-4.54-2.899l-18.194-39.263c-1.161-2.506-.071-5.478 2.435-6.639 2.505-1.162 5.478-.07 6.639 2.435l18.194 39.263c1.161 2.506.071 5.478-2.435 6.639-.68.315-1.395.465-2.099.465zm-36.388-78.527c-1.888 0-3.694-1.074-4.54-2.899l-18.194-39.263c-1.161-2.506-.071-5.478 2.435-6.639 2.505-1.161 5.478-.071 6.639 2.434l18.194 39.263c1.161 2.506.071 5.478-2.435 6.639-.68.315-1.395.465-2.099.465z"/><path d="m519.899 1128.587c-.611 0-1.232-.113-1.835-.351-2.568-1.014-3.828-3.918-2.814-6.487l6.926-17.538-7.928-17.109c-1.161-2.506-.071-5.478 2.435-6.639 2.505-1.162 5.478-.071 6.639 2.434l8.829 19.054c.576 1.242.617 2.666.114 3.939l-7.713 19.532c-.776 1.966-2.66 3.165-4.652 3.165z"/><path d="m399.383 1433.769c-.611 0-1.232-.113-1.835-.351-2.568-1.014-3.828-3.919-2.814-6.487l15.064-38.148c1.014-2.568 3.917-3.828 6.487-2.814 2.568 1.014 3.828 3.919 2.814 6.487l-15.064 38.148c-.776 1.966-2.66 3.165-4.652 3.165zm30.128-76.296c-.611 0-1.232-.113-1.835-.351-2.568-1.014-3.828-3.919-2.814-6.487l15.064-38.148c1.014-2.568 3.918-3.829 6.487-2.814 2.568 1.014 3.828 3.919 2.814 6.487l-15.064 38.148c-.776 1.966-2.66 3.165-4.652 3.165zm30.128-76.296c-.611 0-1.232-.113-1.835-.351-2.568-1.014-3.829-3.918-2.814-6.487l15.065-38.148c1.014-2.569 3.917-3.829 6.487-2.814 2.568 1.014 3.829 3.918 2.814 6.487l-15.065 38.148c-.776 1.966-2.66 3.165-4.652 3.165zm30.13-76.295c-.611 0-1.232-.113-1.835-.351-2.568-1.014-3.829-3.919-2.814-6.487l15.065-38.148c1.014-2.568 3.919-3.828 6.487-2.814s3.829 3.918 2.814 6.487l-15.065 38.148c-.776 1.966-2.66 3.165-4.652 3.165z"/><path d="m376.607 1491.45c-.611 0-1.232-.113-1.835-.351l-19.533-7.713c-2.568-1.014-3.828-3.918-2.814-6.487 1.014-2.568 3.917-3.829 6.487-2.814l14.882 5.877 5.876-14.882c1.014-2.568 3.917-3.828 6.487-2.814 2.568 1.014 3.828 3.919 2.814 6.487l-7.713 19.532c-.776 1.966-2.659 3.165-4.652 3.165z"/><path d="m312.848 1466.273c-.611 0-1.232-.113-1.835-.351l-44.226-17.464c-2.568-1.014-3.828-3.919-2.814-6.487s3.917-3.828 6.487-2.814l44.226 17.464c2.568 1.014 3.828 3.919 2.814 6.487-.776 1.966-2.66 3.165-4.652 3.165zm-88.452-34.928c-.611 0-1.232-.113-1.835-.351l-44.226-17.464c-2.568-1.014-3.828-3.919-2.814-6.487s3.917-3.829 6.487-2.814l44.226 17.464c2.568 1.014 3.828 3.919 2.814 6.487-.776 1.966-2.66 3.165-4.652 3.165zm-88.452-34.928c-.611 0-1.232-.113-1.835-.351l-44.226-17.465c-2.568-1.014-3.828-3.918-2.814-6.487 1.014-2.568 3.917-3.829 6.487-2.814l44.226 17.465c2.568 1.014 3.828 3.919 2.814 6.487-.776 1.966-2.66 3.165-4.652 3.165z"/><path d="m47.494 1361.488c-.611 0-1.232-.113-1.835-.351l-19.532-7.713c-2.568-1.014-3.828-3.919-2.814-6.487s3.917-3.829 6.487-2.814l19.532 7.713c2.568 1.014 3.828 3.919 2.814 6.487-.776 1.966-2.66 3.165-4.652 3.165z"/></g><path d="m974.883 91.562c0 67.179-91.562 176.085-91.562 176.085s-91.562-107.986-91.562-176.085c0-50.568 40.993-91.562 91.562-91.562s91.562 40.993 91.562 91.562z" fill="#ef4a6b"/><circle cx="883.322" cy="91.562" fill="#fbf8f2" r="46.048"/><path d="m206.355 1152.523c0 67.179-91.562 176.085-91.562 176.085s-91.562-107.986-91.562-176.085c0-50.568 40.993-91.562 91.562-91.562s91.562 40.993 91.562 91.562z" fill="#ef4a6b"/><circle cx="114.794" cy="1152.523" fill="#fbf8f2" r="46.048"/><path d="m602.659 152.889h138.533v138.533h-138.533z" fill="#fdc93a" transform="matrix(.97278397 -.23171395 .23171395 .97278397 -33.189 161.742)"/><path d="m5 1750.328v186.817h471.518z" fill="#c0d625"/></svg>*/}
          <img className="h-full w-full object-cover" src={Image} alt="3D casual life trail map" />
        </div>
      </main>
      <footer className="w-full py-6 bg-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-gray-600">© 2023 Locsafe. All rights reserved.</p>
          <nav>
            <ul className="flex items-center space-x-8 text-gray-600 font-medium">
              <li>
                <a href="#" className="hover:text-gray-800">Terms</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">Privacy</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">Support</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage
