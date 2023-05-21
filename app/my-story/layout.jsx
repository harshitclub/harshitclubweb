import PageHeader from "../components/PageHeader/PageHeader";

export const metadata = {
  title: "My Story - Harshit Kumar Full Stack Web Developer",
  description:
    "Discover my journey of becoming a Full Stack Web Developer. From my first interaction with a computer to choosing programming as my career, read my story here.",
  alternates: {
    canonical: "https://www.harshitclub.com/my-story",
  },
};

export default function MyStoryLayout({ children }) {
  return (
    <main className="myStory flex flexColumn width100">
      <PageHeader heading="Harshit Kumar Story" />
      {children}
    </main>
  );
}
