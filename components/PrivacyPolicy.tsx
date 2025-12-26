export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 md:py-16 border-t border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Privacy Policy
      </h2>

      {/* 日本語版 */}
      <div className="mb-16">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          プライバシーポリシー（日本語）
        </h3>
        <div className="prose prose-gray max-w-none text-sm md:text-base">
          <p className="mb-4">
            AuroraSauce
            Software（以下、「当方」）は、当方が運営するウェブサイトおよび当方が提供するモバイルアプリケーション、その他関連サービス（以下、「本サービス」）において、ユーザーの個人情報を適切に取り扱うことを重要な責務と考え、以下のとおりプライバシーポリシーを定めます。
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">1. 適用範囲</h4>
          <p className="mb-4">
            本プライバシーポリシーは、本サービスの利用に関して、当方が取得するユーザーの情報の取扱いに適用されます。
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">2. 取得する情報</h4>
          <p className="mb-4">
            当方は、本サービスの提供および品質向上のため、以下の情報を取得する場合があります。
          </p>

          <h5 className="text-base font-semibold mt-4 mb-2">
            2.1 自動的に取得される情報
          </h5>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>IPアドレス</li>
            <li>ブラウザの種類、OS、端末情報</li>
            <li>アクセス日時、閲覧ページ、操作履歴</li>
            <li>アプリの利用状況データ</li>
            <li>クラッシュログ、エラーログ</li>
          </ul>

          <h5 className="text-base font-semibold mt-4 mb-2">
            2.2 ユーザーから提供される情報
          </h5>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              お問い合わせ時に入力された氏名、メールアドレス、その他の連絡先情報
            </li>
            <li>フィードバックやサポート対応に必要な情報</li>
          </ul>
          <p className="mb-4 text-sm text-gray-600">
            ※
            当方は、原則として氏名、住所、電話番号等の詳細な個人情報の入力を必須とはしていません。
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            3. アカウント登録に関する情報（アカウント機能追加時）
          </h4>
          <p className="mb-4">
            本サービスにおいてアカウント登録機能を提供する場合、以下の情報を取得することがあります。
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>メールアドレス</li>
            <li>ユーザー識別子（ユーザーID等）</li>
            <li>認証情報（パスワードは暗号化された形式で管理されます）</li>
          </ul>
          <p className="mb-4">
            これらの情報は、ユーザー認証、アカウント管理、不正利用防止の目的で利用されます。
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            4. 課金・購入情報について（課金機能追加時）
          </h4>
          <p className="mb-4">
            本サービスにおいて有料機能や課金サービスを提供する場合、購入処理は各プラットフォーム（App
            Store、Google Play 等）または決済事業者を通じて行われます。
          </p>
          <p className="mb-4">当方は、以下の点を原則とします。</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              クレジットカード番号等の決済情報を当方が直接取得・保持することはありません
            </li>
            <li>
              購入履歴、課金状態等の情報を、サービス提供および利用状況管理の目的で取得する場合があります
            </li>
          </ul>
          <p className="mb-4">
            決済に関する情報の取扱いについては、各プラットフォームまたは決済事業者のプライバシーポリシーをご確認ください。
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">5. 情報の利用目的</h4>
          <p className="mb-4">当方は、取得した情報を以下の目的で利用します。</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>本サービスの提供、運営、維持、改善のため</li>
            <li>ユーザー認証およびアカウント管理のため</li>
            <li>課金状態・利用状況の管理のため</li>
            <li>利用状況の分析およびサービス品質向上のため</li>
            <li>不具合調査、障害対応、セキュリティ確保のため</li>
            <li>ユーザーからのお問い合わせへの対応のため</li>
            <li>利用規約または本ポリシーに違反する行為への対応のため</li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">6. 第三者への提供</h4>
          <p className="mb-4">
            当方は、法令に基づく場合を除き、ユーザーの個人情報を第三者に提供することはありません。
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            7. 外部サービスの利用
          </h4>
          <p className="mb-4">
            当方は、本サービスの分析や品質向上のため、以下の外部サービスを利用する場合があります。
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Google Analytics</li>
            <li>
              Firebase（Google LLC が提供する分析・クラッシュ解析等のサービス）
            </li>
          </ul>
          <p className="mb-4">
            これらの外部サービスにより、利用状況データ等が各サービス提供者に収集・処理される場合があります。
          </p>
          <p className="mb-4">
            これらの情報の取扱いについては、各サービス提供者のプライバシーポリシーをご確認ください。
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">8. 個人情報の管理</h4>
          <p className="mb-4">
            当方は、取得した情報について、不正アクセス、紛失、漏えい、改ざん等を防止するため、合理的かつ適切な安全管理措置を講じます。
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">9. ユーザーの権利</h4>
          <p className="mb-4">
            ユーザーは、当方に対して、自己の個人情報に関する以下の請求を行うことができます。
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>開示</li>
            <li>訂正</li>
            <li>利用停止</li>
            <li>削除</li>
          </ul>
          <p className="mb-4">
            これらの請求を希望される場合は、「お問い合わせ先」までご連絡ください。
          </p>
          <p className="mb-4">法令に基づき、適切に対応いたします。</p>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            10. 未成年者の情報について
          </h4>
          <p className="mb-4">
            当方は、未成年者から意図的に個人情報を収集することはありません。
          </p>
          <p className="mb-4">
            未成年者が本サービスを利用する場合は、保護者の同意を得た上で利用してください。
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            11. プライバシーポリシーの変更
          </h4>
          <p className="mb-4">
            当方は、法令の改正やサービス内容の変更等に応じて、本プライバシーポリシーを変更することがあります。
          </p>
          <p className="mb-4">
            変更後のプライバシーポリシーは、本ウェブサイト上に掲載した時点から効力を生じるものとします。
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            12. お問い合わせ先
          </h4>
          <p className="mb-4">
            本プライバシーポリシーに関するお問い合わせは、以下までご連絡ください。
          </p>
          <p className="mb-4">
            <strong>AuroraSauce Software</strong>
          </p>
          <p className="mb-4">メールアドレス：aurorasaucesoftware@gmail.com</p>

          <p className="mt-8 text-sm text-gray-600">最終更新日：2024年</p>
        </div>
      </div>

      {/* 英語版 */}
      <div className="mb-16">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          Privacy Policy (English)
        </h3>
        <div className="prose prose-gray max-w-none text-sm md:text-base">
          <p className="mb-4">
            AuroraSauce Software (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) considers the proper handling of users&apos;
            personal information to be an important responsibility in our
            website, mobile applications, and other related services
            (collectively, the &quot;Service&quot;). We have established this
            Privacy Policy as follows.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">1. Scope</h4>
          <p className="mb-4">
            This Privacy Policy applies to the handling of user information we
            collect in connection with the use of the Service.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            2. Information We Collect
          </h4>
          <p className="mb-4">
            To provide and improve the Service, we may collect the following
            information.
          </p>

          <h5 className="text-base font-semibold mt-4 mb-2">
            2.1 Automatically Collected Information
          </h5>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>IP address</li>
            <li>Browser type, OS, device information</li>
            <li>Access date and time, pages viewed, operation history</li>
            <li>App usage data</li>
            <li>Crash logs, error logs</li>
          </ul>

          <h5 className="text-base font-semibold mt-4 mb-2">
            2.2 Information Provided by Users
          </h5>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              Name, email address, and other contact information entered when
              making inquiries
            </li>
            <li>Information necessary for feedback and support</li>
          </ul>
          <p className="mb-4 text-sm text-gray-600">
            ※ We do not require detailed personal information such as name,
            address, or phone number as mandatory.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            3. Account Registration Information (When Account Features Are
            Added)
          </h4>
          <p className="mb-4">
            If we provide account registration functionality in the Service, we
            may collect the following information.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Email address</li>
            <li>User identifier (user ID, etc.)</li>
            <li>
              Authentication information (passwords are managed in encrypted
              form)
            </li>
          </ul>
          <p className="mb-4">
            This information is used for user authentication, account
            management, and prevention of unauthorized use.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            4. Payment and Purchase Information (When Payment Features Are
            Added)
          </h4>
          <p className="mb-4">
            If we provide paid features or payment services in the Service,
            purchase processing is conducted through each platform (App Store,
            Google Play, etc.) or payment processors.
          </p>
          <p className="mb-4">We adhere to the following principles:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              We do not directly obtain or retain payment information such as
              credit card numbers
            </li>
            <li>
              We may obtain purchase history, payment status, and other
              information for the purpose of service provision and usage
              management
            </li>
          </ul>
          <p className="mb-4">
            For information regarding the handling of payment information,
            please refer to the privacy policies of each platform or payment
            processor.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">5. Purpose of Use</h4>
          <p className="mb-4">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>To provide, operate, maintain, and improve the Service</li>
            <li>For user authentication and account management</li>
            <li>To manage payment status and usage</li>
            <li>To analyze usage and improve service quality</li>
            <li>For troubleshooting, incident response, and security</li>
            <li>To respond to user inquiries</li>
            <li>To address violations of terms of service or this policy</li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            6. Third-Party Sharing
          </h4>
          <p className="mb-4">
            We do not share users&apos; personal information with third parties,
            except as required by law.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            7. Use of External Services
          </h4>
          <p className="mb-4">
            To analyze and improve the Service, we may use the following
            external services:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Google Analytics</li>
            <li>
              Firebase (analytics, crash reporting, and other services provided
              by Google LLC)
            </li>
          </ul>
          <p className="mb-4">
            Usage data and other information may be collected and processed by
            each service provider through these external services.
          </p>
          <p className="mb-4">
            For information regarding the handling of this information, please
            refer to each service provider&apos;s privacy policy.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            8. Information Management
          </h4>
          <p className="mb-4">
            We implement reasonable and appropriate security measures to prevent
            unauthorized access, loss, leakage, or alteration of collected
            information.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">9. User Rights</h4>
          <p className="mb-4">
            Users may request the following regarding their personal information
            from us:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Disclosure</li>
            <li>Correction</li>
            <li>Suspension of use</li>
            <li>Deletion</li>
          </ul>
          <p className="mb-4">
            If you wish to make such requests, please contact us using the
            contact information provided in &quot;Contact Information&quot;
            below.
          </p>
          <p className="mb-4">
            We will respond appropriately in accordance with applicable laws.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            10. Information About Minors
          </h4>
          <p className="mb-4">
            We do not intentionally collect personal information from minors.
          </p>
          <p className="mb-4">
            If a minor uses the Service, please use it with the consent of a
            parent or guardian.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            11. Changes to Privacy Policy
          </h4>
          <p className="mb-4">
            We may change this Privacy Policy in response to legal amendments or
            changes in service content.
          </p>
          <p className="mb-4">
            The revised Privacy Policy will take effect from the time it is
            posted on this website.
          </p>

          <h4 className="text-lg font-semibold mt-6 mb-3">
            12. Contact Information
          </h4>
          <p className="mb-4">
            For inquiries regarding this Privacy Policy, please contact us at:
          </p>
          <p className="mb-4">
            <strong>AuroraSauce Software</strong>
          </p>
          <p className="mb-4">Email: contact@aurorasauce.dev</p>

          <p className="mt-8 text-sm text-gray-600">Last updated: 2024</p>
        </div>
      </div>

      {/* ストア提出用要約 */}
      <div className="mb-16 border-t border-gray-200 pt-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          ストア提出用プライバシーポリシー要約
        </h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="space-y-4 text-sm md:text-base">
            <div>
              <strong className="text-gray-900">個人情報の収集：</strong>
              <span className="text-gray-700">あり</span>
              <p className="text-gray-600 mt-1 ml-4">
                自動的に取得される情報（IPアドレス、端末情報、アクセスログ、利用状況データ、クラッシュログ等）およびユーザーから提供される情報（お問い合わせ時の情報等）を取得する可能性があります。
              </p>
            </div>
            <div>
              <strong className="text-gray-900">収集する情報の種類：</strong>
              <ul className="list-disc pl-6 mt-1 text-gray-600">
                <li>
                  自動的に取得される情報：IPアドレス、ブラウザの種類・OS・端末情報、アクセス日時・閲覧ページ・操作履歴、アプリの利用状況データ、クラッシュログ・エラーログ
                </li>
                <li>
                  ユーザーから提供される情報：お問い合わせ時の氏名・メールアドレス・連絡先情報、フィードバックやサポート対応に必要な情報
                </li>
                <li>
                  アカウント機能追加時：メールアドレス、ユーザー識別子、認証情報（暗号化）
                </li>
                <li>
                  課金機能追加時：購入履歴、課金状態等（決済情報は直接取得しません）
                </li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-900">利用目的：</strong>
              <ul className="list-disc pl-6 mt-1 text-gray-600">
                <li>本サービスの提供、運営、維持、改善</li>
                <li>ユーザー認証およびアカウント管理</li>
                <li>課金状態・利用状況の管理</li>
                <li>利用状況の分析およびサービス品質向上</li>
                <li>不具合調査、障害対応、セキュリティ確保</li>
                <li>ユーザーからのお問い合わせへの対応</li>
                <li>利用規約または本ポリシーに違反する行為への対応</li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-900">第三者提供：</strong>
              <span className="text-gray-700">
                なし（法令に基づく場合を除く）
              </span>
            </div>
            <div>
              <strong className="text-gray-900">外部サービス利用：</strong>
              <ul className="list-disc pl-6 mt-1 text-gray-600">
                <li>Google Analytics（ウェブサイトの利用状況分析）</li>
                <li>
                  Firebase（Google LLC提供の分析・クラッシュ解析等のサービス）
                </li>
              </ul>
              <p className="text-gray-600 mt-1 ml-4">
                これらの外部サービスにより、利用状況データ等が各サービス提供者に収集・処理される場合があります。各サービス提供者のプライバシーポリシーをご確認ください。
              </p>
            </div>
            <div>
              <strong className="text-gray-900">ユーザーの権利：</strong>
              <ul className="list-disc pl-6 mt-1 text-gray-600">
                <li>個人情報の開示を請求する権利</li>
                <li>個人情報の訂正を請求する権利</li>
                <li>個人情報の利用停止を請求する権利</li>
                <li>個人情報の削除を請求する権利</li>
              </ul>
              <p className="text-gray-600 mt-1 ml-4">
                権利行使のご希望は、contact@aurorasauce.dev
                までご連絡ください。法令に基づき、適切に対応いたします。
              </p>
            </div>
            <div>
              <strong className="text-gray-900">
                未成年者データの取り扱い：
              </strong>
              <p className="text-gray-600 mt-1 ml-4">
                当方は、未成年者から意図的に個人情報を収集することはありません。未成年者が本サービスを利用する場合は、保護者の同意を得た上で利用してください。
              </p>
            </div>
            <div>
              <strong className="text-gray-900">連絡先：</strong>
              <p className="text-gray-600 mt-1 ml-4">
                AuroraSauce Software
                <br />
                contact@aurorasauce.dev
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* アプリ内表示用短縮版 */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          アプリ内表示用プライバシーポリシー（短縮版）
        </h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="text-sm md:text-base text-gray-700 space-y-3">
            <p>
              AuroraSauce
              Software（以下「当方」）は、ユーザーの個人情報を適切に取り扱うことを重要な責務と考えています。
            </p>
            <p>
              <strong>取得する情報：</strong>
              当方は、サービスの提供および品質向上のため、IPアドレス、端末情報、アクセスログ、利用状況データ、クラッシュログ、お問い合わせ時の情報を取得する場合があります。アカウント機能や課金機能を追加する場合、関連する情報を取得することがあります（決済情報は直接取得しません）。
            </p>
            <p>
              <strong>利用目的：</strong>
              取得した情報は、サービスの提供・運営・維持・改善、ユーザー認証・アカウント管理、課金状態・利用状況の管理、利用状況の分析、不具合調査・セキュリティ確保、お問い合わせへの対応に利用します。
            </p>
            <p>
              <strong>第三者提供：</strong>
              当方は、法令に基づく場合を除き、ユーザーの個人情報を第三者に提供することはありません。
            </p>
            <p>
              <strong>外部サービス：</strong>
              Google
              Analytics、Firebase等の外部サービスを利用する場合があります。これらのサービスが収集する情報については、各サービスのプライバシーポリシーをご確認ください。
            </p>
            <p>
              <strong>ユーザーの権利：</strong>
              個人情報の開示、訂正、利用停止、削除を請求する権利があります。権利行使のご希望は、contact@aurorasauce.dev
              までご連絡ください。
            </p>
            <p>
              <strong>詳細情報：</strong>
              プライバシーポリシーの詳細については、公式ウェブサイト（https://aurorasauce.dev）をご確認ください。
            </p>
            <p className="text-xs text-gray-500 mt-4">最終更新日：2024年</p>
          </div>
        </div>
      </div>
    </section>
  );
}
