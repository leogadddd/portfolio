import React from "react";
import { ModalsContextProvider } from "@/contexts/modals.context";
import SideBarComponent from "@/components/sidebar/sidebar.component";
import ProjectSidebarContainer from "@/services/project/project.sidebar.container";
import { logout } from "@/actions/auth/logout.action";
import { Suspense } from "react";
import PageBar from "@/components/pagebar/pagebar.component";
import { EditorContextProvider } from "@/contexts/editor.context";

export default async function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <EditorContextProvider>
      <ModalsContextProvider>
        <div className="flex h-max">
          <SideBarComponent>
            <ProjectSidebarContainer />
          </SideBarComponent>
          <div className="flex-1">
            <div className="sticky top-0 z-[10] flex gap-4 justify-between p-2 bg-[--color-dark]">
              <PageBar />
              <Suspense>
                <form action={logout}>
                  <button className="bg-[--color-accent] p-1 px-4 rounded-lg text-sm drop-shadow-lg hover:brightness-110 transition-all">
                    Logout
                  </button>
                </form>
              </Suspense>
            </div>
            {children}
          </div>
        </div>
      </ModalsContextProvider>
    </EditorContextProvider>
  );
}
