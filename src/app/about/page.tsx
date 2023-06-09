import Image from "next/image";
import { AiFillGithub, AiOutlinePaperClip } from "react-icons/ai";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
  description: "커리어 소개",
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
};

export default function aboutPage() {
  const devq = ["React", "postCSS", "HTML5", "React-Query", "Firebase"];
  const devlog = ["React", "Next.js", "TailwindCSS", "HTML5", "CSS3"];
  const rocket = [
    "React",
    "Firebase",
    "Cloudinary",
    "React-Query",
    "TailwindCSS",
    "HTML5",
    "CSS3",
  ];
  const vanilla = ["Javascript", "HTML5", "CSS3"];
  return (
    <article className="w-full max-w-5xl p-10 mx-auto my-8 bg-slate-50">
      <section className="flex flex-col mb-10 lg:flex-row">
        <div className="m-auto lg:m-0">
          <Image
            className="rounded-full"
            src={`/images/profile.jpeg`}
            width={120}
            height={120}
            alt="profile image"
          />
        </div>
        <div className="flex flex-col gap-4 p-2 mt-10 lg:ml-10 lg:mt-0">
          <h2 className="text-sm font-bold lg:text-xl">
            안녕하세요, 주니어 프론트엔드 개발자 서대평입니다.
          </h2>
          <p>FrontEnd Developer</p>
          <p className="text-sm text-my-color">
            항상 사용자의 입장에서 고민하고 개발하려고 노력합니다. 또한 새롭고
            흥미로운 것이 생기면 빠르게 도전하고 실행합니다.
          </p>
        </div>
      </section>
      <section className="py-4 border-b border-b-gray-300">
        <h2 className="mb-8 text-xl font-bold text-my-color">SKILL</h2>
        <div className="py-4">
          <h3 className="mb-6 text-gray-500">Programming Language</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm font-bold lg:grid-cols-4 lg:gap-4">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="py-4">
          <h3 className="mb-6 text-gray-500">Framework & Library</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm font-bold lg:grid-cols-4 lg:gap-4">
            <li>React</li>
            <li>Next.js</li>
            <li>TailwindCSS</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="py-4">
          <h3 className="mb-6 text-gray-500">Server & DevOps & Tools</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm font-bold lg:grid-cols-4 lg:gap-4">
            <li>Github</li>
            <li>Figma</li>
            <li>Firebase</li>
            <li>Cloudinary</li>
          </ul>
        </div>
      </section>
      <section className="py-4 border-b border-b-gray-300">
        <h2 className="mb-8 text-xl font-bold text-my-color">PROJECT</h2>
        <div className="flex flex-col gap-4 py-4 border-b border-b-gray-300">
          <h3 className="text-xl font-bold ">devQ</h3>
          <p className="mb-2 text-sm text-gray-400 ">2023-05-25 ~ 2023-06-05</p>
          <ul className="pl-4 text-sm list-disc">
            <li>React로 만든 프론트엔드 면접 준비 사이트</li>
            <li>다크모드 적용(Context)</li>
            <li>반응형 웹 디자인</li>
            <li>리액트 쿼리로 서버데이터 관리</li>
            <li>렌더링 시 질문 리스트 랜덤으로 형성</li>
          </ul>
          <ul className="flex flex-wrap gap-4 text-sm">
            {devq.map((lang, index) => (
              <li
                className="px-2 font-bold text-white rounded-full bg-my-color"
                key={index}
              >
                {lang}
              </li>
            ))}
          </ul>
          <div className="flex justify-end gap-2">
            <a href="https://github.com/pyeong777/devQ" target="_blank">
              <AiFillGithub className="w-8 h-8" />
            </a>
            <a href="https://devq.netlify.app/" target="_blank">
              <AiOutlinePaperClip className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-4 border-b border-b-gray-300">
          <h3 className="text-xl font-bold ">Devlog</h3>
          <p className="mb-2 text-sm text-gray-400 ">2023-05-12 ~ 2023-05-24</p>
          <ul className="pl-4 text-sm list-disc">
            <li>Next.js로 만든 개발블로그</li>
            <li>카테고리 필터 기능 구현</li>
            <li>SEO 최적화</li>
            <li>마크다운 뷰어 라이브러리 활용</li>
          </ul>
          <ul className="flex flex-wrap gap-4 text-sm">
            {devlog.map((lang, index) => (
              <li
                className="px-2 font-bold text-white rounded-full bg-my-color"
                key={index}
              >
                {lang}
              </li>
            ))}
          </ul>
          <div className="flex justify-end gap-2">
            <a
              href="https://github.com/pyeong777/Devlog-Next.js"
              target="_blank"
            >
              <AiFillGithub className="w-8 h-8" />
            </a>
            <a href="https://pyeongdevlog.vercel.app/" target="_blank">
              <AiOutlinePaperClip className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-4">
          <h3 className="text-xl font-bold ">감귤마켓</h3>
          <p className="mb-2 text-sm text-gray-400 ">2022-01-03 ~ 2022-01-17</p>
          <ul className="pl-4 text-sm list-disc">
            <li>Vanilla Javascript를 사용하여 진행한 거래 & SNS 팀 프로젝트</li>
            <li>제공된 API를 활용한 데이터 호출</li>
            <li>프론트엔드 팀 리더 역할</li>
            <li>테스트 계정은 깃허브 저장소에서 확인해주세요</li>
          </ul>
          <ul className="flex flex-wrap gap-4 text-sm">
            {vanilla.map((lang, index) => (
              <li
                className="px-2 font-bold text-white rounded-full bg-my-color"
                key={index}
              >
                {lang}
              </li>
            ))}
          </ul>
          <div className="flex justify-end gap-2">
            <a
              href="https://github.com/pyeong777/gamguel-market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C"
              target="_blank"
            >
              <AiFillGithub className="w-8 h-8" />
            </a>
            <a href="https://gamguel-market.netlify.app/" target="_blank">
              <AiOutlinePaperClip className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>
      <section className="py-4">
        <h2 className="mb-8 text-xl font-bold text-my-color">DEV EXPERIENCE</h2>
        <div className="flex flex-col gap-4 py-4">
          <h3 className="text-xl font-bold ">
            멋쟁이사자처럼 프론트엔드 스쿨 1기 수료
          </h3>
          <p className="mb-2 text-sm text-gray-400 ">2021-10 ~ 2022-01</p>
          <p>멋쟁이사자처럼에서 진행하는 프론트엔드 개발자 과정</p>
          <p>
            HTML5, CSS3, JAVASCRIPT, REACT, REST API, FIGMA, POSTMAN 을 활용한
            프로젝트 진행
          </p>
          <p>현업에서 근무하시는 개발자분들의 특강 & 스터디 경험</p>
        </div>
      </section>
    </article>
  );
}
