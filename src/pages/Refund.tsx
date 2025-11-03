const Refund = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Training Refund Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm italic">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Overview</h2>
              <p>
                Ripotek Technology Inc. is committed to providing high-quality training programs. 
                This Refund Policy outlines the terms and conditions for refunds related to our 
                training courses and programs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Full Refund Eligibility</h2>
              <p>Students are eligible for a full refund if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellation is made at least 14 days before the course start date</li>
                <li>The course is cancelled by Ripotek Technology Inc.</li>
                <li>Students are unable to attend due to documented medical emergencies</li>
                <li>Technical issues on our end prevent course delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Partial Refund Policy</h2>
              <p>
                Students who cancel within 7-13 days before the course start date are eligible 
                for a 50% refund of the course fee.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. No Refund Conditions</h2>
              <p>No refunds will be issued if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellation is made less than 7 days before the course start date</li>
                <li>The student has completed more than 25% of the course material</li>
                <li>The student violates our code of conduct or training agreements</li>
                <li>Non-attendance without prior notification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Course Transfer</h2>
              <p>
                As an alternative to refunds, students may request to transfer their enrollment 
                to a future session of the same course at no additional cost, subject to seat 
                availability. Transfer requests must be made at least 7 days before the course 
                start date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Corporate Training Programs</h2>
              <p>
                Refund terms for corporate training programs are specified in individual training 
                agreements and may differ from individual enrollment policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Refund Processing</h2>
              <p>
                Approved refunds will be processed within 14 business days and issued to the 
                original payment method. Students will receive email confirmation once the 
                refund has been processed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Course Materials</h2>
              <p>
                Any course materials, including digital resources and access credentials, must 
                be returned or access terminated before a refund can be processed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Exceptional Circumstances</h2>
              <p>
                We understand that exceptional circumstances may arise. Students facing unforeseen 
                situations should contact our training coordinator to discuss their specific situation. 
                We will evaluate each case individually and may offer alternative solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. How to Request a Refund</h2>
              <p>
                To request a refund, please submit a written request to{" "}
                <a href="mailto:training@ripotek.com" className="text-accent hover:underline">
                  training@ripotek.com
                </a>{" "}
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your full name and enrollment details</li>
                <li>Course name and start date</li>
                <li>Reason for refund request</li>
                <li>Any supporting documentation (if applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Satisfaction Guarantee</h2>
              <p>
                We are committed to your success. If you're not satisfied with your training 
                experience within the first two sessions, please contact us immediately. We'll 
                work with you to address any concerns or provide appropriate solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Policy Changes</h2>
              <p>
                Ripotek Technology Inc. reserves the right to modify this Refund Policy at any time. 
                Changes will be effective immediately upon posting to our website. Students enrolled 
                before policy changes will be subject to the policy in effect at the time of enrollment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Information</h2>
              <p>
                For questions about this Refund Policy or to request a refund, please contact:{" "}
                <a href="mailto:training@ripotek.com" className="text-accent hover:underline">
                  training@ripotek.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refund;
