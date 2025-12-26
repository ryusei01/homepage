export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        About
      </h2>
      <div className="prose prose-gray max-w-none">
        <p className="text-base md:text-lg text-gray-700 mb-4">
          AuroraSauce Softwareは、Webアプリ、モバイルアプリ、AIを中心としたソフトウェア開発を行う個人開発ブランドです。
        </p>
        <p className="text-base md:text-lg text-gray-700">
          BtoB / BtoC 両対応を想定し、ユーザー体験を重視したソフトウェアの開発を行っています。
        </p>
      </div>
    </section>
  );
}

