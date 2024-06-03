import {SiteHeader} from "@/app/components/siteHeader";
import {UserMenu} from "@/app/components/userMenu";
import {ArticleList} from "@/app/components/articleList";
import {SiteFooter} from "@/app/components/siteFooter";

export default function Home() {
    return (
        <main className={"w-[100%] flex flex-col justify-center items-center"}>
            <SiteHeader/>
            <UserMenu/>
            <ArticleList/>
            <SiteFooter/>
        </main>
    );
}
