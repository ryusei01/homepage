export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        <div className="text-center text-sm text-gray-600 space-y-2">
          <p>© AuroraSauce Software</p>
          <p>All rights reserved.</p>
          <p className="mt-4">
            連絡先:{" "}
            <a
              href="mailto:contact@aurorasauce.dev"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              contact@aurorasauce.dev
            </a>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            ※ドメイン取得後に正式な連絡先に差し替え予定
          </p>
        </div>
      </div>
    </footer>
  );
}

