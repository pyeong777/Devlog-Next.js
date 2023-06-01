import Image from "next/image";

export default function Introduction() {
  return (
    <section className="flex items-center my-6">
      <div className="w-full py-12 ">
        <h2 className="text-xs lg:text-sm ">
          <p>프론트엔드 개발자의 기술 블로그</p>
          <p>경험한 것들을 기록으로 남기고 있습니다.</p>
        </h2>
        <h3 className="mt-3 text-xs text-gray-400 lg:text-sm">
          {"A front-end developer's technical blog to record experiences."}
        </h3>
      </div>
      <div className="lg:mr-6">
        <Image
          width={120}
          height={120}
          priority
          src="/assets/mainlogo.svg"
          alt="Introduction svg"
        />
      </div>
    </section>
  );
}
