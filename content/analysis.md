# Analysis

## Project Overview

The aim of this project is to design and develop Integrated Workforce Management Platform, a fully fledged workforce rota and management system intended to support the organisation of schedules, time tracking and payroll data within a small to medium-sized organisation. The system as a whole aims to manage: employee schedules (hereby refered to as rotas), employee time tracking (clock in and out functionality), and general payroll-related data, in a unified package – as opposed to traditional workforce management methods such as retaining multiple spreadsheets, paper records, or assorted and disconnected software tools. These methods are proven to be innefective due to their inherent inefficiencies, their difficulty in audits and their reliance on human involvement – making them prone to human error. The development of this project is particularly complex due to it handling sensitive data, variable shift patterns, varing permissions and accurate payroll calculations – requiering consistent and secure processing. 

## Suitability of a Computational Solution

This project is solvable by computational methods as it involves the handing of workflows and the presentation and generation of structured, rule-based data that would otherwise be error-prone if done manually. Due to the projects nature as a workforce management system, it will as a result, manage vital and sensitive data related to employees, shifts, PTO (paid time off), and cover requests – all these examples of data managed by the system are structured with clearly defined properties and relationships between them, allowing for consistent management and storage. This therefore requires the implementation of validation, through algorithms to detect invalid inputs, scheduling conflicts, calculate aggregated hours for payroll and ensure coherent functionality of the project. Persistent storage through a database further improves the experience of the project in comparison with the manual alternative, with assurance of all changes being recorded centrally – regardless of multiple simultaneous changes, allowing for consistent results. Through the automation and enforcement of the various aforementioned factors, the system significantly reduces the workload on administrative tasks and the likelihood of human error as a result. Permissions, PTO approvals, and payroll rules are enforced programmatically, so sensitive operations cannot be bypassed or mismanaged by human oversight. Furthermore, through the planned audit log, the system generates coherent audit logs for all changes throughout the platform – proving traceable records of actions taken effecting the overall system and employees – supporting accountability and transparency throughout the user’s organisation and providing valuable chain-of-custody evidence for actions taken towards employees.

This project can be seen to be highly amenable to a computational approach because in comparison to doing tasks manually, a computer makes tasks significantly faster and accurate. Error prone if done by hand, the calculation of total worked hours, and the intricate detection of rota conflicts are inherently suited to the capabilities of a computational approach. The system should have the ability to validate consistently across situations, reducing human bias and increasing accuracy. Furthermore, it should be scalable; enabling it to handle any volume of data provided – assuming its hardware is capable – making it highly useful to a company with a large employee population, and removing the need to do the work manually which would increase administration time significantly. As a result, the implementation of a computational approach in this situation offers functionality and performance that can be seen to be practically unachievable without computational support, demonstrating precisely the necessity of a computer-based system in the effective management of a workforce and therefore the validity of this project. 

## Stakeholders

The key stakeholders for Integrated Workforce Management Platform include managers, employees, HR and payroll staff, compliance officers, and future adopters. I also have a significant personal stake in this project as my manager currently spends significant time weekly manually creating rotas, requiring him to adjust for time off, cross-reference for availability and as a result often recalculating hours. This process is slow and error-prone, often leading to multiple revised schedules being sent out as I have experienced. Integrated Workforce Management Platform aims to provide a solution to all the above listed problems by automating scheduling, validation, availability and payroll calculations. 

Managers and rota coordinators will utilise this webapp to define shifts, approve PTO, cover requests and respond to absences. These are the people who organise and supervise staff schedules on a day-to-day basis. Employees, the staff members who work the shifts, will benefit from clear visibility of assigned shifts and easy access to PTO and cover requests through personal simple-to-use dashboards. HR and payroll staff will benefit from the platform’s payroll generation features, reducing pay disputes through its accurate calculation of hours. Compliance officers will also gain benefits from the systems fundamental implementation of permanent audit logs, providing traceable records of all actions taken – proving adherence to policies and procedures retrospectively and at the point of use through validation algorithms. These are staff responsible for auditing processes and ensuring organisational rules and legal requirements are followed. Finally, small organisations or multi-site teams will be able to adopt the system in the future, scaling its benefits across larger workforces. These future adopters are managers and staff in other organisations who need a reliable workforce management system.

## Feature Research

To ensure Integrated Workforce Management Platform met real-world use cases and met the needs of my potential users and my stakeholders, I researched existing implementations of workforce management solutions and subsequently gathered stakeholder feedback of the proposed implementation.

### Existing Implementations

Below are feature rich examples of existing implementations, these were chosen through a variety of methods. Some existing products, such as RotaCloud, seemed to be a regular occurrence in informal conversations with classmates and friends, with it being deployed in their workplaces. With other solutions such as ‘Deputy’, ‘When I Work’, and ‘Planday’ being highly rated across the internet rankings  with features aligning with my initial requirements of the ability to schedule staff members.

RotaCloud: Offers an easy-to-use interface with a minimal learning curve, with basic functionality self-explanatory such as the creation of weekly schedules. Its clock-in/out functionality combined with its ability to make quick changes in shift schedules makes it highly popular across many small-to-medium sized businesses, especially in the hospitality industry. However, transparency features, such as detailed audit logs, are lacking in lower pricing bands  – creating a barrier to visibility for smaller teams.

Deputy: A feature-rich platform combining scheduling and compliance in one package, primarily aimed at large corporations focusing on covering complex scenarios without providing options for less-technologically able managers who seek a simplified workforce management system for rapid scheduling and cover/PTO management.

When I Work: Highly mobile first implementation, with notification features  built into the platform as a core function, and schedule sharing with family and friends made simple. While these features are perfect for the stakeholders and demographic, enabling ease of use and integration with existing tools such as mobile phones, its cover and shift swap workflows are not integrated into the schedule calendar, feeling significantly detached from the main workflows of the system. 

Planday: Providing an enterprise-grade level of security , and strong support for the hospitality sector through its payroll integration, its focus towards large corporations and enterprises may again raise the possibility of confusion in smaller companies, with managers potentially feeling overwhelmed through its largely complex and extensive interface and capabilities, forcing a steep learning curve in use.

### Feature Prioritization from Existing Solutions

By analysing the existing solutions discussed above, I have identified key features to prioritise in the development of Integrated Workforce Management Platform. Core audit logs, a feature lacking in most tiers of RotaCloud, will be built directly into the core of the project, to provide transparency and traceability of all actions and changes taken. Furthermore, the webapps entire design will be focused on ease of use, accessibility and intuition, avoiding the complexity of various industry standard tools researched such as Deputy and Planday. Finally, PTO management and shift requests shall be fully integrated into the employee schedule calendar, further improving UI ease of use and ensuring smooth workflows without the separate processes evident in Deputy. 

### Stakeholder Feature Feedback

Following this research and the gathering of features presented by existing implementations, my findings where aggregated and presented directly to my stakeholders in informal conversations. Faruk Ekin, my manager, highlighted the difficulty of managing payroll and handling PTO requests manually – and highlighted the need for a system in which PTO requests, shift swaps and ease of use for management were a focus. He further pushed the need of an audit system to record actions taken against employees, due to the nature of small companies having insufficient HR resources, and the unification of such in one product would streamline the process significantly. Furthermore, a conversation with Dylan Sully, an employee at a local large-scale hospitality company, emphasised that having a simple clean interface with a minimal learning curve allowed for the easy visibility of upcoming shifts significantly reduced scheduling confusion and scheduling questions focused phone calls to his manager. 

### Influence On Design & Development

These informed development and design decisions through the research of existing implementations and informal interviews with stakeholders directly influenced the development and design priorities of Integrated Workforce Management Platform. By incorporating the real needs for management and staff, Integrated Workforce Management Platform is therefore designed to be effective in increasing administrative efficiency while simultaneously being intuitive for daily use by employees, ensuring the system meets the actual needs of the users.

## Project Features

The features that I want my project to include are listed below. These are derived from manually creating rotas, stakeholder feedback, and from investigating the existing computerised implementations:

- User authentication
- Role-based dashboards: employee vs management
- Employee management
- Profile management
- Shift management
- Cover requests workflow
- PTO / leave request and approval workflow
- Announcements
- Payroll management interface + automation script
- Time tracking integration
- Tags management
- Customization and settings panels
- Audit logging
- Timezone handling 
- Encryption
- Email templates
- React SPA frontend with reusable components, modals, navigation
- Tailwind-based CSS design system
- Error handling and confirmation modals
- Relational database with migration scripts
- REST-style API endpoints
- Granular permission and role system per action
- Multi-tenant mode while retaining self-host deployment path
- Fairness metrics dashboard
- Shift suggestion helper
- Calendar feed export and CSV/JSON rota export
- Webhook / API integration for external HR or payroll systems
- In-app and email notifications
- Multi-site/location support
- Advanced audit log filtering
- Access policy
- MFA (multi-factor authentication) and optional SSO (OAuth / SAML) integration
- Comprehensive reporting
- Mobile-optimised views and offline-capable PWA enhancements
- Data retention and archival tools
- Accessibility improvements
- Uptime / health monitoring panel
- Rate limiting and anomaly detection
- Billing module
- Import tool for bulk staff/shift data
## Moscow Analysis

While many features in the list above are essential to the functionality of the project, some can be seen to be rather aspirational and unessential to the core functionality of the project. A MOscOw (Must, Should, Could, Wont) analysis will allow the for the organisation of these points and the project. These features will be organised into the following groups of features that:

- Must be included for the project to be a success – features that are the core of the project’s functionality, without these the project would be incomplete.
- Should be completed for the project to feel further useful and developed – Taking the project from a basic level to a more complete piece of software.
- Could be included if there is sufficient time to program and test said features.
- Won’t be incorporated into the project at this level, due to their nature as quality-of-life features rather than essential features for the projects aims to be completed.
If possible, the implementation of all features listed would be my end goal, but for the purposes of this A Level project, and due to its time and resource limitations – this will not be possible.

| ID | Feature | Success Criteria |
| --- | --- | --- |
| M1 | User authentication & session handling | Users can log in/out. Invalid credentials are rejected. Password reset flow sends one-time link. sessions persist securely until expiry. |
| M2 | Role-based dashboards | Staff see personal rota, requests, announcements. Managers see management panels (shifts, employees, payroll) with restricted manager-only actions. |
| M3 | Employee management | Manager can create, edit, deactivate employees. Changes immediately reflected in rota assignment options. |
| M4 | Shift creation & assignment | Manager can create shifts (date, start/end, role/requirements) and assign staff. Assigned shifts appear on employee view. |
| M5 | Cover request workflow | Employee can request cover on an assigned shift. Manager can approve/reassign. Shift status updates visibly. |
| M6 | PTO / leave management | Employees submit PTO. Manager approves/denies. Approved PTO blocks new shift assignments and presents conflicts. |
| M7 | Conflict detection | System flags double booking, overlapping times, assignment during PTO, and under-filled required roles before publishing. |
| M8 | Payroll management (base) | Manager can view payroll screen showing hours or shift totals for pay period. Automation script generates/update records. |
| M9 | Time tracking integration | Clock/time data (where available) links to payroll/hour summaries. Missing entries are highlighted. |
| M10 | Tags / skills management | Manager can create/edit tags. Tags attach to scheduled shifts and are filterable in assignment UI. |
| M11 | Announcements module | Manager can post announcements with priority. Employees see ordered list. Unread clearly indicated. |
| M12 | Profile management | User can update profile picture and basic details. |
| M13 | Audit logging | Tracks create/update/delete on core entities (shift, assignment, PTO, cover, employee) stored with user, timestamp, action. viewable in audit modal. |
| M14 | Encryption & secure storage | Sensitive fields (e.g. reset tokens) not stored in plain text. Encryption key present. Password hashing uses strong algorithm. |
| M15 | REST API core endpoints | CRUD endpoints for employees, shifts, assignments, PTO, cover requests, announcements respond with correct status codes. |
| M16 | Error handling & feedback | Failures (validation, permission, missing entity) produce clear UI messages. No unhandled crashes in normal use. |
| M17 | Time zone normalisation | All times stored consistently. users see localised times without logical errors on boundaries (e.g. DST). |
| M18 | Responsive SPA frontend | Core pages render correctly on desktop and mobile viewport widths without layout breakage. |
| M19 | Password & access hygiene | Password reset tokens expire. |

| ID | Feature | Success Criteria |
| --- | --- | --- |
| S1 | PWA & offline basics | App has manifest + service worker. Reload behaves gracefully if offline (cached shell loads, shows fallback). |
| S2 | Basic reporting summaries | Manager can view aggregate hours and absence count per employee over a chosen range. |
| S3 | Accessibility improvements | All interactive elements keyboard-focusable. Forms have accessible labels. colour contrast meets standards. |
| S4 | Announcements priority styling | Priority levels visually distinct. Ordering by priority. |
| S5 | Improved audit filtering | User can filter audit log by entity type and date range. Results paginate if long. |
| S6 | Consistent theming & UI polish | Shared components follow design tokens (spacing, colour, typography) across all management screens. |

| ID | Feature | Success Criteria |
| --- | --- | --- |
| C1 | Shift suggestion helper | System suggests candidates for unfilled shifts based on availability and hour balance. |
| C2 |  Granular per-action permissions  | Admin can allow/deny specific actions (publish rota, approve PTO, manage payroll). Blocked actions show clear message. |
| C3 | Calendar/CSV export | Users can subscribe to iCal for published shifts and export week/hour totals to CSV. |

| ID | Feature | Success Criteria |
| --- | --- | --- |
| W1 | Multi-tenant SaaS mode & billing | Hosting multiple organisations with isolation and billing. |
| W2 | MFA/SSO (OAuth/SAML) | Multi-factor and external identity providers. |
| W3 | Full auto-scheduling engine | End-to-end optimisation assigning all shifts without human input. |

## Limitations

### Scope

There are many factors limiting the project, but a key factor would be its scope. With the sheer number and complexity of features identified in my feature list and my MoSCoW analysis, it is outside the realm of possibility to implement them to the required standard within the given timeframe, as the sole developer and within A-level requirements. Therefore, the focus of the project’s implementation will be on the delivery of all ‘Must Have’ features and a large quantity of ‘Should Have’ features, while the ‘Could Have’ and ‘Won’t Have' features, such as multi-tenant deployment in the form of a SaaS (software as a service), full automated scheduling decisions, or an integrated custom billing module, would be ideal if the software was deployed commercially – are outside the current scope and boundaries of the current iteration of the project and will not be attempted at its current level.

### Experience

Although I have extensive professional experience in web and software development through freelance engineering – the project will still be limited by A-Level time constrains. While the features that are essential to the project will be implemented reliably – they will lack fine-tuned performance and scalability requirements a professionally developed and deployed project would be attributed with.

### Performance

Whilst I have further significant experience in the management of production grade servers and deployments, significantly high user volumes or enterprise-scale deployments would require significant core changes and optimisation of the main codebase through methods such as load balancing, background job processing and caching implementations to mitigate such issues, and as mentioned these are significantly outside the scope of this project.

### Security

Finally, data and access security can be acknowledged as a limitation. While all user related data will be encrypted at rest, passwords will be hashed, inputs will be validated and access controls will be implemented, I am not a certified cyber security professional, and as such – a full certified security audit, potentially with penetration testing, would be necessary before a full-scale public deployment due to the nature of the project handling significant amounts of private employee data.

## Development Requirements

During the development of Integrated Workforce Management Platform, I will require a capable development environment, composed of various elements, split into hardware and software to write, test and debug code effectively. This ensures the reliability of the precursor tools I shall be using to create a functioning project before the start of development. Furthermore, while development will occur on a single machine, deployment will require a server with sufficient resources.

### Hardware

| Requirement | Justification |
| --- | --- |
| Computer | A desktop or laptop is required to run development tools such as a code editor. |
| Monitor | A screen is needed to view the output of the computer previously mentioned and to view the code editor and output of the program. |
| Keyboard | A keyboard is required to input text into the computer; it is essential to input code and navigate the operating system |
| Mouse | This is required to navigate the operating system, to test the code, and to write the code. |

### Software

| Requirement | Justification |
| --- | --- |
| Operating System | An operating system is required to manage the computer’s hardware and to run the required software for development i.e. the code editor and web browser. In my case use of Windows. |
| Code Editor | This software is required in the writing of code due to its file management systems, syntax highlighting and code editing functionality. In my case use of Visual Studio Code. |
| Modern Web Browser | This is essential in the using and testing of the project, as this is the environment the WebApp will be ran. |
| Python | This is required as the backend is to be written in python, to test and run code during development this is required. |
| Sanic Python Library | This is required to run the core of the application as it is the Python library that is to provide all essential functionality to the backend API of the project. |
| NodeJS | To run the ReactJS development server |
| NPM | To install and manage packages for NodeJS |
| Git/GitHub | To manage source code changes and provide version control |
| Internet Connection | To connect to GitHub if being used. |
| Database Software | Essential to test backend database locally. |
| PIP | For python package management to install Sanic and manage other dependencies. |

## End User Requirements

End users of Integrated Workforce Management Platform will need further requirements, namely specific software and hardware, to ensure functionality is correct – and all users: management, employees, and HR staff can utilise the project reliably and without issues.

### Hardware

| Requirement | Justification |
| --- | --- |
| Computer or Mobile Device | The project requires the user to possess a device capable of running a modern web browser. |
| Monitor/Screen | This is required to view the WebApp and to interact (if on mobile) with the WebApp. |
| Keyboard | This is essential to interact and input data with the WebApp (if on Computer). |
| Mouse | This is essential to navigate your way around the WebApp and to interact with functionality on said app (if on Computer). |

### Software

| Requirement | Justification |
| --- | --- |
| Modern Web Browser | This is the most important requirement of the end user; the web browser must be capable of rendering modern JavaScript content for the WebApp to work as it is to be written in ReactJS. |
| A Functional Internet Connection | To navigate to the WebApp and so the WebApp can interact with the backend API. |

