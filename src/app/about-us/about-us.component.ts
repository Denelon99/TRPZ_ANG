import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  getList(): any {
    return [{text: "Expertise: Our team of experienced accountants is well-versed in the latest accounting practices and " +
          "regulations. We stay updated with the ever-changing financial landscape to provide you with the best solutions" +
          "for your accounting needs."},
            {text: "Personalized Service: We understand that every business is unique, and we tailor our services to meet your" +
            "specific requirements. Whether you're a small startup or an established corporation, we provide customized" +
            "solutions that fit your business goals and budget."},
            {text: "Technology-driven Approach: We leverage cutting-edge accounting tools and software to streamline your financial" +
            "processes and improve accuracy. Our digital solutions ensure efficient communication, data security, and" +
            "real-time access to your financial information."},
            {text: "Client Satisfaction: We are committed to providing exceptional service to our clients. Our team is responsive," +
              "reliable, and committed to building long-term partnerships. We take pride in our high client satisfaction rates" +
              "and strive to exceed your expectations."}]
  }
}
