//Edit the content of this file to insert new professional content.
//Then run `node resume.js` and this script will create a docx of this resume.


const { Document, Packer, Paragraph, TextRun, AlignmentType, TabStopType, TabStopPosition, UnderlineType } = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: { 
      document: { 
        run: { font: "Calibri", size: 22 }, // 11pt body text
        paragraph: { spacing: { line: 276 } } // 1.15 line spacing
      } 
    },
    paragraphStyles: [
      {
        id: "Name",
        name: "Name",
        basedOn: "Normal",
        run: { size: 36, bold: true, color: "1a1a1a", font: "Calibri" },
        paragraph: { spacing: { after: 60 }, alignment: AlignmentType.LEFT }
      },
      {
        id: "Title",
        name: "Title", 
        basedOn: "Normal",
        run: { size: 24, color: "4a4a4a", font: "Calibri" },
        paragraph: { spacing: { after: 180 }, alignment: AlignmentType.LEFT }
      },
      {
        id: "SectionHeader",
        name: "Section Header",
        basedOn: "Normal",
        run: { size: 26, bold: true, color: "1a1a1a", font: "Calibri" },
        paragraph: { 
          spacing: { before: 240, after: 120 }, 
          alignment: AlignmentType.LEFT,
          border: { bottom: { color: "2196F3", space: 1, style: "single", size: 12 } }
        }
      },
      {
        id: "JobTitle",
        name: "Job Title",
        basedOn: "Normal",
        run: { size: 22, bold: true, color: "1a1a1a", font: "Calibri" },
        paragraph: { spacing: { before: 140, after: 40 }, alignment: AlignmentType.LEFT }
      },
      {
        id: "CompanyDate",
        name: "Company Date",
        basedOn: "Normal",
        run: { size: 20, italics: true, color: "4a4a4a", font: "Calibri" },
        paragraph: { spacing: { after: 80 }, alignment: AlignmentType.LEFT }
      },
      {
        id: "Bullet",
        name: "Bullet",
        basedOn: "Normal",
        run: { size: 22, color: "1a1a1a", font: "Calibri" },
        paragraph: { spacing: { after: 80 }, indent: { left: 360, hanging: 360 } }
      },
      {
        id: "Skills",
        name: "Skills",
        basedOn: "Normal",
        run: { size: 22, color: "1a1a1a", font: "Calibri" },
        paragraph: { spacing: { after: 100 }, alignment: AlignmentType.LEFT }
      }
    ]
  },
  sections: [{
    properties: { 
      page: { 
        margin: { top: 720, right: 720, bottom: 720, left: 720 } // 0.5" margins
      } 
    },
    children: [
      // HEADER - Name and Title
      new Paragraph({
        style: "Name",
        children: [new TextRun("HUNTER C. BEEZLEY")]
      }),
      new Paragraph({
        style: "Title",
        children: [new TextRun("Lead Technical Support Engineer | IAM & Security Specialist | Automation & Systems Builder")]
      }),
      
      // Contact Info
      new Paragraph({
        spacing: { after: 240 },
        children: [
          new TextRun({ text: "Portland, OR", size: 20, color: "4a4a4a" }),
          new TextRun({ text: "  •  ", size: 20, color: "4a4a4a" }),
          new TextRun({ text: "914-319-2467", size: 20, color: "4a4a4a" }),
          new TextRun({ text: "  •  ", size: 20, color: "4a4a4a" }),
          new TextRun({ text: "hunterbeezley@gmail.com", size: 20, color: "2196F3" })
        ]
      }),

      // PROFESSIONAL SUMMARY
      new Paragraph({
        style: "SectionHeader",
        children: [new TextRun("PROFESSIONAL SUMMARY")]
      }),
      new Paragraph({
        spacing: { after: 180 },
        children: [new TextRun({
          text: "Lead Technical Support Engineer with 10+ years of experience specializing in identity access management (IAM), security operations, team leadership, and support systems automation. Expert in Okta administration, SSO/SCIM integrations, API security, and incident response. Proven track record leading global teams, contributing to production codebases, building automation tools and internal APIs, and delivering enterprise-scale security infrastructure projects. Combines deep technical expertise with systems thinking, process optimization, and customer success capabilities.",
          size: 22
        })]
      }),

      // PROFESSIONAL EXPERIENCE
      new Paragraph({
        style: "SectionHeader",
        children: [new TextRun("PROFESSIONAL EXPERIENCE")]
      }),

      // Lead TSE
      new Paragraph({
        style: "JobTitle",
        children: [new TextRun("Lead Technical Support Engineer - Account Security Team Lead")]
      }),
      new Paragraph({
        style: "CompanyDate",
        children: [new TextRun("New Relic  |  2024 - Present")]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Lead security-focused support team of 9 engineers across 3 global regions (AMER, EMEA, APAC), specializing in IAM, SSO/SCIM, API security, and security incident response")
        ]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Spearheaded complete overhaul of New Relic's Global Technical Support internal role-based access control (RBAC) system, consolidating 6 roles into 2 streamlined roles, improving security posture and operational efficiency for 200+ support engineers")
        ]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Designed and implemented NerdGraph GraphQL API endpoint for authentication domain user asset migrations, creating custom RBAC controls and enabling team self-service capabilities, eliminating engineering bottlenecks")
        ]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Contribute directly to New Relic's IAM codebase and maintain public-facing IAM documentation, bridging gap between support and engineering teams")
        ]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Built automated Slack workflows using Google Apps Script, webhook integrations, and custom API endpoints to streamline team operations, reducing manual escalation time by 40%")
        ]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Led rollout of automated call scheduling system using Google Calendar API integration, improving customer experience and reducing scheduling overhead for enterprise support")
        ]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Serve as escalation point for critical security incidents, managing on-call rotation for enterprise customer security emergencies")
        ]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Primary Okta subject matter expert, conducting internal training sessions and assisting enterprise customers with complex SSO/SCIM integrations and troubleshooting")
        ]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Manage 500+ security escalations monthly, maintaining 95%+ customer satisfaction rating while achieving 10-day average time-to-resolution")
        ]
      }),

      // Senior TSE
      new Paragraph({
        style: "JobTitle",
        children: [new TextRun("Senior Technical Support Engineer")]
      }),
      new Paragraph({
        style: "CompanyDate",
        children: [new TextRun("New Relic  |  2022 - 2024")]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Provided advanced technical support for enterprise customers on IAM, authentication, API integrations, and security configurations")
        ]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Developed Python automation scripts and tools for SCIM user management, bulk operations, and account administration, improving team efficiency and reducing manual work")
        ]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Mentored junior engineers on security best practices, troubleshooting methodologies, and customer communication")
        ]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Collaborated with product and engineering teams to identify and resolve platform security issues")
        ]
      }),

      // TSE
      new Paragraph({
        style: "JobTitle",
        children: [new TextRun("Technical Support Engineer")]
      }),
      new Paragraph({
        style: "CompanyDate",
        children: [new TextRun("New Relic  |  2019 - 2022")]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Delivered technical support for full-stack observability platform, resolving complex customer issues across APM, infrastructure monitoring, and synthetic monitoring")
        ]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Developed expertise in NRQL, REST APIs, GraphQL (NerdGraph), integrations, and platform architecture")
        ]
      }),

      // Apple - QA
      new Paragraph({
        style: "JobTitle",
        children: [new TextRun("Cellular QA Engineer")]
      }),
      new Paragraph({
        style: "CompanyDate",
        children: [new TextRun("Apple  |  2019")]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Assisted Wireless Technology and Ecosystems team by performing manual and automated testing for Apple Watch and iPhone telephony features")
        ]
      }),

      // Apple - Genius
      new Paragraph({
        style: "JobTitle",
        children: [new TextRun("Genius")]
      }),
      new Paragraph({
        style: "CompanyDate",
        children: [new TextRun("Apple  |  2011 - 2019")]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Diagnosed and repaired hardware and software issues, providing efficient solutions and ensuring high customer satisfaction")
        ]
      }),
      new Paragraph({
        style: "Bullet",
        children: [
          new TextRun({ text: "• ", size: 22, color: "2196F3", bold: true }),
          new TextRun("Trained and mentored new team members on product knowledge, repair processes, and customer service best practices")
        ]
      }),

      // TECHNICAL SKILLS
      new Paragraph({
        style: "SectionHeader",
        children: [new TextRun("TECHNICAL SKILLS")]
      }),
      new Paragraph({
        style: "Skills",
        children: [
          new TextRun({ text: "Security & Identity Access Management:  ", bold: true }),
          new TextRun("IAM Architecture & Implementation • SSO/SCIM (SAML 2.0, OAuth, OpenID Connect) • Okta Administration & Integration (Platform Expert) • API Security (REST & GraphQL) • Security Incident Response & Management • RBAC Design & Implementation • GDPR/CCPA Compliance")
        ]
      }),
      new Paragraph({
        style: "Skills",
        children: [
          new TextRun({ text: "Development & Automation:  ", bold: true }),
          new TextRun("Python (Automation, Scripting & API Development) • JavaScript/Node.js • SQL • GraphQL (NerdGraph API) • REST API Design • Google Apps Script • Slack Workflow Automation • Webhook Integrations • Git/Version Control • CI/CD Concepts")
        ]
      }),
      new Paragraph({
        style: "Skills",
        children: [
          new TextRun({ text: "Platform & Tools:  ", bold: true }),
          new TextRun("Full-Stack Observability (New Relic Platform) • Okta • Google Workspace Administration • NRQL (New Relic Query Language) • SCIM Provisioning • Authentication Protocols • Cloud Security Concepts")
        ]
      }),
      new Paragraph({
        style: "Skills",
        children: [
          new TextRun({ text: "Leadership & Operations:  ", bold: true }),
          new TextRun("Global Team Leadership (9 Direct Reports, 3 Regions) • Cross-Functional Project Management • On-Call Incident Response Management • Process Design & Optimization • Technical Documentation & Knowledge Management • Training & Mentorship • Stakeholder Communication")
        ]
      }),

      // EDUCATION
      new Paragraph({
        style: "SectionHeader",
        children: [new TextRun("EDUCATION")]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [
          new TextRun({ text: "Master of Arts", bold: true, size: 22 }),
          new TextRun({ text: "  |  Union Theological Seminary  |  2015", size: 22 })
        ]
      }),
      new Paragraph({
        spacing: { after: 180 },
        children: [
          new TextRun({ text: "Bachelor of Arts", bold: true, size: 22 }),
          new TextRun({ text: "  |  Nyack College  |  2013", size: 22 })
        ]
      }),

      // CERTIFICATIONS
      new Paragraph({
        style: "SectionHeader",
        children: [new TextRun("CERTIFICATIONS & TRAINING")]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "• Apple Certified Mac Technician (ACMT)", size: 22 })]
      }),
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "• Apple Mac Service Certification", size: 22 })]
      }),
      new Paragraph({
        children: [new TextRun({ text: "• Apple Service Fundamentals", size: 22 })]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("Hunter_Beezley_Resume.docx", buffer);
  console.log("Resume created successfully!");
});
