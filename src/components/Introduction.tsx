import Image from "next/image";

export default function Introduction() {
  return (
    <section className="flex items-center justify-between my-6">
      <div className="py-12 basis-4/12">
        <h2>
          <p>프론트엔드 개발자의 기술 블로그</p>
          <p>경험한 것들을 기록으로 남기고 있습니다.</p>
        </h2>
        <h3 className="mt-3 text-sm text-gray-400">
          {"A front-end developer's technical blog to record experiences."}
        </h3>
      </div>
      <div className="basis-8/12">
        <Image
          className="m-auto animate-bounce"
          priority
          src="/assets/img.svg"
          width={100}
          height={100}
          alt="Introduction svg"
        />
      </div>
    </section>
  );
}
