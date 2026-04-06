# Evaluation

## Project Success

To evaluate the success of this project I evaluated the implementation against the MoSCoW requirements I defined proceeding development, focusing in specifically on the MUST requirements, as these represented the core functional needs of the system. Functional, robustness and usability testing evidence was also used to further determine the implementation level of each requirement and if their aims were met.

Overall, this project can be considered highly successful – this is due to all MUST requirements being fully met post-development and their subsequent implementations being thoroughly validated through testing and stakeholder feedback. To evaluate these requirements in a concise but in-depth manner, I will be grouping related MoSCoW requirements and evaluating their implementations as a whole.

The first group, authentication, security and access control, can be seen to be fully and successfully implemented in Integrated Workforce Management Platform. Users’ ability to log in and out securely, invalid credentials being rejected, and password reset links having associated expiry times directly correspond and satisfy the requirements M1 and M19. Furthermore, as seen in Iteration 1 and 2, sensitive information such as passwords, reset tokens and user related data are stored as either hashes (in the case of passwords) or encrypted strings, meeting the requirements of M14. The implementations of these features were validated though functional testing of login flows and robustness testing methods – in which invalid credentials and expired tokens passed into the system were correctly rejected, without system crashes occurring, showcasing the implementation of secure session handling and strong access security.

Permission separation and user experience requirements, my second group to be evaluated, can also be seen to be fully achieved in the final implementation of Integrated Workforce Management Platform. The implementation of two distinct dashboards (a requirement outlined in M2), this distinction furthered through the use of separate navigation systems in the frontend, ensures only information allowed at the users permission level is accessible. With employees being able to access personal and global public information such as rotas, PTO requests, profile information and announcements, while managers being able to access all that employees can and specific managerial features such as shift, payroll and employee management systems. This separation of differing user permission levels was confirmed both in the testing of Iteration 2 and the stakeholder useability testing stage (specifically in R3) – in which the named stakeholder was unable to access the employee management features despite their best efforts. This separation reduced cognitive load and prevented unauthorised actions, contributing significantly to overall system usability.

Furthermore, the implementation of my third evaluative group – core workforce functionalities – can again be seen to be fully and successfully implemented into Integrated Workforce Management Platform. Managers having the ability to create, edit, delete and assign shifts to users (a requirement outlined in M4), with said changes appearing immediately on the employee dashboard, adheres directly to the success criteria of real-time visibility as set out prior. Employee management features, as outlined by M3, are another successful implementation, with managers having the ability to create, modify and deactivate staff members and these changes being adopted instantly across the system with reflections in assignment options. This separation reduced cognitive load and prevented unauthorised actions, contributing significantly to overall system usability. Functional tests F1, F2, and F6 confirmed that these actions worked reliably and without data inconsistency.

Leave, cover and conflict handling, a set of requirements that are central to Integrated Workforce Management Platform, were also fully achieved in the final implementation. This is seen through employees having the ability to submit PTO requests, a requirement set out in M6, for approval regardless of shift existence within the requested PTO range, with the system correctly flagging conflicts with existing shifts at the managerial approval stage rather than failing the request itself – a feature directly tested and demonstrated in functional test F7 and robustness test R1. The feature of managers having the ability of approving PTO requests and reassigning the effected shifts using the reassignment wizard, as outlined by M7, was directly validated and tested in functional tests F3 and F4, in which, conflict detection (M7) successfully flagged existing shifts during the PTO approval process prior to publication, preventing gaps in scheduling.

Payroll and time-tracking integration requirements were met at a base level. Managers can view payroll summaries for a selected period (M8), and recorded clock-in and clock-out data is linked to payroll calculations where available (M9). Functional testing confirmed that payroll data updated correctly and highlighted missing time entries, ensuring transparency and reducing administrative errors.

Security reliability and quality requirements, my last evaluative group, were also met. Clear validation and error handling, as outlined by M16, ensured that users received clear feedback when attempting invalid actions, such as creating shift with invalid dates or attempting to clock in twice. During alpha testing, no unhandled crashes or errors occurred during use. Time zone normalisation, required in M17, ensured the consistency of time data throughout the application, while the responsive SPA frontend (M18) rendered correctly across desktop and mobile screen sizes, as observed during usability testing.

In conclusion, all MUST requirements from the MoSCoW requirements table were fully implemented throughout the project and met their specific implementation requirements. Testing both administered by me and by stakeholders further confirmed the intended purpose of the system being achieved, managing shifts, payroll and leave, while remaining highly secure and usable. This demonstrates precisely that the projects objectives were successfully achieved within the defined scope. 

## Usability

Useability was a core consideration in the systems design and development processes, ensuring both managers and employees could complete tasks without in-depth training on how to use the platform. Permission based separated dashboards for employees and managers improved useability directly by only revealing features and pages directly relevant to the role the user was assigned, reducing the mental load when navigating a system in which lots of the features are inaccessible and preventing accidental access to restricted functionality. This specific separation of dashboards and access was confirmed to be functional and implemented correctly in useability test U2 – in which both stakeholders were tasked with navigating the system without external guidance from me (the developer) and achieved said task stating it was simple to understand. 

Complex workflows such as the shift reassignment process were simplified through the implementation of features such as the reassignment wizard, outlined in M5. This step-by-step flow directly contributes to a reduction in user error, enabled the user to go back to previous decisions and modify them, and supported decision-making when resolving staffing issues. Usability test UI clearly demonstrated that managers could complete these tasks on first use.

A further enhancement to the usability of the system was the creation of standardised and clear user feedback mechanisms. With validation and descriptive error messages, a requirement outlined in M16, providing immediate and instructional feedback on the failure or success of actions – enabling the user to be informed when taking subsequent actions on the platform. Robustness tests R2, R4 and R5 directly evidenced the correct implementation of these usability features – showing that invalid actions were handled gracefully through the surfacing of error messages and without system crashes.

The employee dashboard was designed with simplicity in mind, prioritising frequently used actions such as clocking in, submitting PTO, and requesting cover. During usability test U4, the employee stakeholder was able to use the dashboard effectively without instruction. Additionally, the responsive SPA frontend (M18) ensured that core functionality remained accessible on both desktop and mobile devices.

Overall, usability testing confirms that the system is intuitive, efficient, and appropriate for daily use (a requirement of this system) by non-technical users.

## Limitations

Overall, I am content with the state of Integrated Workforce Management Platform post-development due to all MUST requirements being fully implemented and tested, alongside a small number of SHOULD features. Many features listed in the SHOULD and COULD sections were not implemented or included in this final state of the project for one of two reasons, either due to them being beyond the previously outlined scope of the projects timeframe or due to them requiring significant levels of complexity in their implementations than was appropriate for this project. If the opportunity arose, additional development cycles, iterations and further research would facilitate their inclusion in future versions of Integrated Workforce Management Platform.

### Manual Nature of Scheduling

The first key limitation of Integrated Workforce Management Platform’s final state can be considered to be its scheduling systems inherent reliance on manual control. While the implementation of conflict detection (M7) through the creation of the Reassignment Wizard does successfully flag PTO shift existence and facilitates actions to be taken, the system does not automatically resolve said issues or suggest optimal staff assignments. This results in managers being required to interpret these warnings presented by the system and make increasing numbers of scheduling decisions themselves, a necessity that could become highly time-consuming in the case of large business deployments. Although this approach ensures direct managerial control over every aspect of the application, it limits efficiency in use of the system compared to some more automated alternatives. 

### Limited Reporting & Analytics

The implementation of the payroll system can also be seen to be a significant limitation of Integrated Workforce Management Platform as a whole. While managers have the ability to view hours worked and shift totals for a given period, Integrated Workforce Management Platform lacks the ability to calculate and display more advanced reporting metrics such as trend analysis, absence summaries or performance metrics. This significantly restricts the systems efficacy in long term deployments due to its lack of facilitation for long term planning or strategic data driven decision making – requiring managers to make use of external tools for deeper analysis.

### Lack of External Integrations

A further limitation of the project can be seen to be the lack of external integration features. Management users can not currently export payroll or user metrics for analysis in other systems, subscribe to shift updates through push notifications, add shifts to their existing calendars automatically or deploy payments automatically through accounting software integrations. This reduces flexibility and may limit adoption in organisations that rely on existing payroll or calendar software.

### Minimal Implementation of Accessibility and Offline Support

Although the interface is designed to be clear and responsive as required in M18, accessibility features such as full keyboard navigation, enhanced screen reader support and colour filters were not fully implemented. Additionally, to view the platform even when loaded previously, the system requires a constant active internet connection and does not support any form of offline usage, limiting accessibility further to users with unreliable connections.

In summary, while the system successfully meets its core objectives, these limitations highlight areas where functionality, automation, and accessibility could be improved in future iterations.

## Maintenance

The system was wholly developed with maintainability in mind to ensure that future updates, bug fixes and feature extensions can be implemented effectively and without significant barriers. Core functionality is separated into distinct modules, such as authentication, scheduling, payroll, and employee management, reducing the risk that changes in one area will negatively affect others. Furthermore, the frontend and backend are inherently separate systems – ensuring changes between the systems are individualised, allowing frontend tweaks to take place without the risk of the complex backend logic being affected.

One significant effort implemented to ensure maintainability of the system was the use of clearly defined REST API endpoints (as required by M15), which improves maintainability through the adherence to RESTful standards throughout the iterative development process – allowing future refactoring or extending of the project to be done easily without requiring changes across the entire system. Additionally, consistent validation and error handling (M16) reduce the likelihood of corrupt or invalid data entering the system, lowering long-term maintenance overhead.

Audit logging further supports the maintenance of Integrated Workforce Management Platform by its provision of clear records of all create, update and delete actions across all core systems - making diagnosing issues and tracking unintended changes significantly easier. Permission based access control also simplifies maintenance, as permission changes can be managed through a centralised system rather than on a per action level. 

Overall, these design and implementation decisions ensure the system is straightforward to maintain, debug, and extend, making it suitable for long-term use and future development.

## Future Development

In this section I will explore possible features of Integrated Workforce Management Platform, explain how they would function, and go in depth into their integration with the existing platform.

### Automated Shift Suggestions

The first feature I would develop in future iterations of Integrated Workforce Management Platform would be an automated shift suggestion system. This system would aim to build upon the existing shift management system, presenting suggestions of new shifts to the management user. Identifying suggestions based on preexisting data such as availability, approved PTO, cover requests, and current working hours, this system aims to reduce the managerial burden of creating and organising shift allocations themselves.

This feature would be implemented by building upon the existing conflict detection system, extending its functionality into a scoring system – and associating employees with eligibility scores for predefined shift durations. These scores would leverage historical data such as submitted cover requests and time off requests, calculating the chance of an employee being available for the shift in question and ranking them for selection. 

In terms of technical implementation, a new backend API endpoint would have to be created, returning suggested candidates for an imaginary shift between a provided timeframe. This system would then be implemented in a similar way to the reassignment wizard – with a secondary option when creating a shift to open a shift creation wizard, allowing the newly created endpoint to present the suggested candidates for the shift and allowing the managerial user to approve or reject the selection at their discretion.

### Advanced Data Reporting

Another feature I would aim to include in any future iterations of Integrated Workforce Management Platform is an expansion of the existing payroll reporting system. This expansion would aim to provide further data reports such as total hours worked by users, absence summaries and common shift allocations per user, enabling management users to have significantly increased oversight when taking actions.

To implement this feature, I would have to create a set of new REST API endpoints to aggregate shift data, PTO data, occurrences of shifts not being clocked in to, and common shift allocations over provided date ranges. This would be able to be implemented without significant refactoring of existing code, making use of existing stored data rather than implementing new data recording methods. 

In presenting this data to the management users, a generation system similar to how the current payroll management system works could be used – with graphs containing the statistics rather than a table appearing on generation.

### External Integration

External Integration is another feature I would like to include in Integrated Workforce Management Platform if the chance to develop the project further arises. This would entail the integration of various external services, namely the ability to link your calendar to the systems shift records and the ability to sign in to the platform using existing authentication methods such as Google or Apple authentication.

To implement the linking to existing calendar applications, I would make use of two existing standards – the google calendar API for consistent and recurring updates and the iCal standard for adding current shift data into the provided calendar application. I would firstly create a new employee endpoint, able to be invoked from the profile page using a button, which invoked a call to Googles calendar API, populating the authenticated users’ calendar with shift data from the database. Following this I would then create another employee endpoint, also able to be invoked from the profile page, to download the current weeks or months shifts in iCal format – also reusing existing scheduling data and requiring minimal logical changes.

In the case of the implementation of Google or Apple third party authentication, the process becomes more difficult. The user would remain being created by a management user with a provided email and name, while the option to link to either of these accounts would be presented on the profile page for use to login prior to account creation and as an alternative to regular email and password authentication – not a replacement.

I would technically have to create several new API endpoints, a set to link the user to the third-party account through a provided ID and a secondary set to handle alternative log in routes for the system itself.

