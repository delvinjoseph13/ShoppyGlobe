import { StrictMode,Suspense,lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import Checkout from './components/CheckOutPage.jsx'

const Home=lazy(()=>import('./components/Home.jsx'));
const ProductList=lazy(()=>import('./components/ProductList.jsx'));
const ProductDetail=lazy(()=>import('./components/ProductDetails.jsx'));
const CartItem=lazy(()=>import('./components/CartItem.jsx'));

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<div className='text-center mt-10 text-xl'>Loading...</div>}>
    {children}
  </Suspense>
);



const appRoute=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index:true,
        element:(
          <SuspenseWrapper>
            <Home/>
          </SuspenseWrapper>
        )
      },
      {
        path:'/products',
        element:(
          <SuspenseWrapper>
            <ProductList/>
          </SuspenseWrapper>
        )

      },{
        path:'/products/:id',
        element:(
          <SuspenseWrapper>
            <ProductDetail/>
          </SuspenseWrapper>
        )
      },{
        path:'/cart',
        element:(
          <SuspenseWrapper>
            <CartItem/>
          </SuspenseWrapper>
        )
      },{
        path:'/checkout',
        element:(
          <SuspenseWrapper>
            <Checkout/>
          </SuspenseWrapper>
        )
      }

    ],
    errorElement:<PageNotFound/>
  }
]
  
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoute}/>
  </StrictMode>,
)
