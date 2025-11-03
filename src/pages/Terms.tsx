const Terms = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm italic">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using Ripotek Technology Inc.'s services, you agree to be bound by these 
                Terms of Service and all applicable laws and regulations. If you do not agree with any 
                of these terms, you are prohibited from using or accessing our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
              <p>
                Ripotek Technology Inc. provides data consulting services and professional training programs. 
                Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Data architecture and strategy consulting</li>
                <li>Data engineering and analytics implementation</li>
                <li>Professional training programs</li>
                <li>Managed services and platform administration</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Consulting Services</h2>
              <p>
                Consulting engagements are governed by individual statements of work (SOW) that detail 
                project scope, deliverables, timelines, and fees. Both parties must agree to and sign 
                the SOW before work commences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Training Programs</h2>
              <p>
                Training program terms, including enrollment requirements, payment terms, and refund 
                policies, are detailed in our separate Refund Policy and training enrollment agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
              <p>
                All content, methodologies, and materials provided by Ripotek Technology Inc. remain 
                our intellectual property unless explicitly transferred through written agreement. 
                Client data and deliverables created specifically for clients remain client property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Confidentiality</h2>
              <p>
                Both parties agree to maintain confidentiality of proprietary information shared during 
                the engagement. Specific confidentiality terms are outlined in individual engagement 
                agreements and NDAs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p>
                Ripotek Technology Inc. shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages arising from the use of our services. Our total 
                liability shall not exceed the amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of 
                material changes via email or through our website. Continued use of our services 
                after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the 
                Province of Alberta, Canada, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at:{" "}
                <a href="mailto:legal@ripotek.com" className="text-accent hover:underline">
                  legal@ripotek.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
