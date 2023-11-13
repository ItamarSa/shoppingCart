import { ProductIndex } from './cmps/ProductIndex.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <ProductIndex />,
        label: 'Home 🏠',
    },
    {
        path: 'products',
        component: <ProductIndex />,
        label: 'Meet our Products'
    },
    // {
    //     path: 'survey',
    //     component: <SurveyIndex />,
    //     label: 'Take our survey'
    // },
    // {
    //     path: 'review',
    //     component: <ReviewIndex />,
    //     label: 'Reviews'
    // },
    // {
    //     path: 'chat',
    //     component: <ChatApp />,
    //     label: 'Chat'
    // },
    // {
    //     path: 'about',
    //     component: <AboutUs />,
    //     label: 'About us'
    // },
    // {
    //     path: 'admin',
    //     component: <AdminApp />,
    //     label: 'Admin Only'
    // }
]

export default routes