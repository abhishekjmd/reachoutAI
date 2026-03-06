import React from "react";
import { Sidebar } from "@/features/discover";
import { PipelineHeader, StatsPills, KanbanColumn, KanbanCard } from "@/features/pipeline/components";

export default function PipelinePage() {
  return (
    <div className="bg-background-dark text-slate-100 flex min-h-screen overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 flex flex-col overflow-hidden ml-[240px]">
        <PipelineHeader />
        
        <div className="px-8 flex-1">
          <StatsPills />
          
          <div className="mt-8 flex-1 overflow-x-auto pb-8">
            <div className="flex gap-6 h-full items-start">
              <KanbanColumn title="Sent" count={2} colorClass="text-blue-400">
                <KanbanCard 
                  name="Bright Smile Dental" 
                  status="follow-up" 
                  contactName="Dr. Sarah Jenkins"
                  icon="https://lh3.googleusercontent.com/aida-public/AB6AXuCL4lVUPWKFQVxzK-EEPN6lwIi7N2-n5hs8vxPKjHgeRZ-GDFHo3k5Q12GmdNuqaWXNKAo4P_2774mqXbmZIpd_HqWNwaboWn78f0Z-KJvcB4APrMdBKXrfralzGV-CNkNVAoLlCFRchoFgsvfV6gx_nk6l_hMtdDUteuY2dHHiWfpxKYM11uioQi8UIr057k0zsQ-wdJvoTt2rJRXJrTgVkgOpV7wT9k1h97jQCBYFUXkiUCfuDifh0GxVMTvpMbPvrH74wkHfezQ"
                />
                <KanbanCard 
                  name="Sharma Eye Care" 
                  status="follow-up" 
                  contactName="Raj Sharma"
                  icon="https://lh3.googleusercontent.com/aida-public/AB6AXuDkAhVd76aFQVmZXfQbtO2MlVz5Y2R1sqRFiQcC5ohuYEDG-lnJybv4ANLtUMqSTg3GmtYTVy3wmC1k6XW6ZS_B2aNr5A21vyBC-N9H0SW5SkbVBO6UcmzEz8Rx0fBBRQd69eDRFLfxGV-v8mG6MQS_3QQDnPQTgfPqVXW4ddYBth8xts9tO8l8oF5JMqG47NZL8oTiylzmo18JCptNUbSHTrNEDjZfBTpAVFa50RPy56ZKApGEUOCMO51LpyrQQsS-EGPiEmF8V2Y"
                />
              </KanbanColumn>

              <KanbanColumn title="Replied" count={1} colorClass="text-teal-400">
                <KanbanCard 
                  name="Green Leaf Salon" 
                  contactName="Elena Gomez"
                  message="Can you send more pricing details? We're interested in the premium..."
                  icon="https://lh3.googleusercontent.com/aida-public/AB6AXuAycd0ljqLrALLGGJCCFdAwI1q5dv0xunbu_8jbMRxDhmZX8tuvZjKX201jIFBougQlIQl7d6iaT3JZ4YR_k-JIw_B2Zp-oVahMx11JV7sPVcs-TxEA-n--aGsqVXElXDO54o00MoG0rwmo7rp1yr1cfhQUdMFTOqCa8lVI4aWD4Gf5fM9Efoh_kjoarTwJlAbSGo0DDKUBcNUscl0q76KCnFAqihMRFp5gNIOVMHQJIuUrrHRyO3ZpaNx29u2CIN8gvRnqeQyqGWc"
                />
              </KanbanColumn>

              <KanbanColumn title="Interested" count={1} colorClass="text-purple-400">
                <KanbanCard 
                  name="City Care Clinic" 
                  status="high-intent" 
                  contactName="Marcus Chen"
                  icon="https://lh3.googleusercontent.com/aida-public/AB6AXuD3WiBRW1dy3xi3dIQ7vkHnwqMwCPgJIIJkgPM6V7hK3huTD-GIyQWLf6hKtfBnE4iwUAOzH6gmKph4COF6iZtFWVbFwPWW1pHv-sUGZh7G_PCYCHK3qBE_0uJyoGby-tdu2GMFEWgrMolxBHDj7s9JM4BQK6ND4LxF_R1DBP3eo_8EtNzqB2pv69xLa_YIsEtnJwtf9ccArE2oev3mJK1oORBwMlfSxKOk_mJrvBmK7VywqKQljA8Zpt2wFIlenvQyWCHjmzgLHWs"
                />
              </KanbanColumn>

              <KanbanColumn title="Converted" count={1} colorClass="text-primary">
                <KanbanCard 
                  name="Royal Kitchen" 
                  status="converted" 
                  contactName="Chef Julian"
                  icon="https://lh3.googleusercontent.com/aida-public/AB6AXuA6-pFT7pBE7dmQwWklMjYRjK_iPt3oje0su33gV0pcGi7Gw1wKB4zc5NjhPy635VUdgIaMpD3ILpqe7YvQor2jFSc-3fKaJGXqmjuFdSHCIiuvdI_bpKUum69UztbMb56m8pFgXkxGxEmpX8MfPw3N8ZnQjUnQElSb-YCB6jYySC4fTQDjzV8BfPP4rkT1yXJUm8d4FRN6mXZu1mjjjidEp-Etzf18ewkg9uLn9mFMBN3-aFfAHDqq5Dg7EkeJkr2X14uTp49vRmI"
                />
              </KanbanColumn>

              <KanbanColumn title="Not Interested" count={1} colorClass="text-slate-500">
                <KanbanCard 
                  name="Quick Fix Motors" 
                  contactName="Alan Moore"
                  opacity
                  icon="https://lh3.googleusercontent.com/aida-public/AB6AXuAIT6pnWSis8yvSkNghtlSWNywAu6fvz2ZA0-HUKjPr7DzID1q6k0ne-UMnlDIl7G0URr8EzAbaSG4O62XqMhG6lbdm43VBpGeJ6BNWTJ355iqIyBjK15rTQSTVRGntgpwv_6f0zSe8Lw_4bF9TTXkzvGG_dlXrwMCumP6nRMLQcaDLmx3O1PoYWZVCBQtcYpKOfZVuj-PKXfKhmfg8Rkj1qFM2y2Ke-T7cvrqB0oAPh7fy3TLSR6hH8ZyPE33f4tbSEKXZZ-2IMDk"
                />
              </KanbanColumn>
            </div>
          </div>
        </div>

        <footer className="p-6 flex justify-center border-t border-white/5 bg-sidebar-dark/30">
          <p className="text-slate-600 text-[11px] flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">info</span>
            Drag and drop leads to move them between stages. AI agents automatically update these based on conversation sentiment.
          </p>
        </footer>
      </main>
    </div>
  );
}
