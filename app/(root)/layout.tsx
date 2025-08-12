import Header from "@/components/Header"
import SidebarMain from "@/components/SidebarMain"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider className='bg-[url(/bg.png)]'>
      <SidebarMain />
      <SidebarInset>
        <div className='flex flex-col w-full min-h-screen mx-auto bg-[url(/bg.png)]'>
          <Header />
          <main className='root-container '>
            <div className='w-full mx-auto'>
              <div className='md:mt-10 pb-5 md:pb-20'>{children}</div>
            </div>
          </main>
          {/* <Footer /> */}
        </div>
      </SidebarInset>
    </SidebarProvider>

  )
}

export default layout
