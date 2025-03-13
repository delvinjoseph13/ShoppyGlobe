import { StrictMode,Suspense,lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import Checkout from './components/CheckOutPage.jsx'

const Home=lazy(()=>import("./components/Home.jsx"));
const ProductList=lazy(()=>import("./components/ProductList.jsx"));
const ProductDetail=lazy(()=>import("./components/ProductDetails.jsx"));
const CartItem=lazy(()=>import("./components/CartItem.jsx"));





const appRoute=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index:true,
        element:(
          <Suspense fallback={<div className='text-center mt-10 text-xl'>Loading...</div>}>
            <Home/>
          </Suspense>
        )
      },
      {
        path:'/products',
        element:(
          <Suspense fallback={<div className='text-center mt-10 text-xl'>Loading...</div>}>
            <ProductList/>
          </Suspense>
        )

      },{
        path:'/products/:id',
        element:(
          <Suspense fallback={<div className='text-center mt-10 text-xl'>Loading...</div>}>
            <ProductDetail/>
          </Suspense>
        )
      },{
        path:'/cart',
        element:(
          <Suspense fallback={<div className='text-center mt-10 text-xl'>Loading...</div>}>
            <CartItem/>
          </Suspense>
        )
      },{
        path:'/checkout',
        element:(
          <Suspense fallback={<div className='text-center mt-10 text-xl'>Loading...</div>}>
            <Checkout/>
          </Suspense>
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
