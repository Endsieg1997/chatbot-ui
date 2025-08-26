import { redirect } from "next/navigation";

interface PageProps {
  params: {
    locale: string;
  };
}

export default function HomePage({ params: { locale } }: PageProps) {
  // 进入即跳转到公开 workspace 的聊天界面，保留语言参数
  redirect(`/${locale}/public/chat`);
}
