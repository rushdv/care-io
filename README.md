# Care.xyz

A modern web application for reliable and trusted care services including baby sitting, elderly care, and sick care services.

## Features

- **Service Listings**: Browse available care services with detailed information
- **User Authentication**: Secure login and registration using Firebase
- **Booking System**: Easy booking process for care services
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Real-time Updates**: Live booking status and notifications

## Tech Stack

- **Frontend**: Next.js 16, React 19
- **Styling**: Tailwind CSS 3.4
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Icons**: React Icons
- **Image Handling**: Next.js Image component
- **Forms**: React Hot Toast for notifications

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd care-io
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with your Firebase configuration:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
care-io/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.jsx         # Root layout
│   ├── page.jsx           # Home page
│   ├── booking/           # Booking pages
│   ├── login/             # Login page
│   ├── my-bookings/       # User bookings page
│   ├── register/          # Registration page
│   └── service/           # Service detail pages
├── components/            # Reusable components
│   ├── Banner.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── PrivateRoute.jsx
│   ├── ServiceCard.jsx
│   └── ...
├── context/               # React context
│   └── AuthContext.jsx
├── lib/                   # Utility functions
│   ├── bookings.js
│   ├── firebase.js
│   └── services.js
├── public/                # Static assets
└── ...
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact the development team.