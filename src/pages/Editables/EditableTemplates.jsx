import React from 'react'
import Layout from '../../Layout.'

function EditableTemplates() {
  return (
    <Layout>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm lg:gap-10 sm:mx-auto lg:max-w-full">

          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/editable-templates/business-cards" aria-label="Article">
              <img
                src="https://img.freepik.com/free-psd/modern-clean-professional-business-card-template_501970-93.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="object-cover w-full h-80 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <a
                href="/editable-templates/business-cards"
                aria-label="Article"
                className="inline-block mb-3 text-stone-dark transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  Businesscards
                </p>
              </a>
            </div>
          </div>

          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/editable-templates/email-signatures" aria-label="Article">
              <img
                src="https://images.squarespace-cdn.com/content/v1/59a6d145197aea7e662f1d63/1654707195137-YLEIYEGJPYV9WRZWE9AV/Bright_EmailSignatureTemplates_v03-Mockup01.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="object-cover w-full h-80 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-stone-dark transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  Email Signature
                </p>
              </a>
            </div>
          </div>

          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/editable-templates/letterheads" aria-label="Article">
              <img
                src="https://graphicyard.com/wp-content/uploads/2018/09/High-Quality-Professional-Corporate-Letterhead-Template-1.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="object-cover w-full h-80 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-stone-dark transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  Letterhead
                </p>
              </a>
            </div>
          </div>

          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
            <a href="/editable-templates/job-announcements" aria-label="Article">
              <img
                src="https://thumbs.dreamstime.com/b/cv-resume-template-job-applications-75631171.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="object-cover w-full h-80 rounded"
                alt=""
              />
            </a>
            <div className="py-5">
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-stone-dark transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  Job Announcements
                </p>
              </a>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default EditableTemplates