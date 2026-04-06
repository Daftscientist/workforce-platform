# Testing

This section covers the end testing I performed because of project completion. Following my MoSCoW MUSTs, I tested each individual aim in detail, assuring adherence of the programmed implementation to the initially set out requirements and aims.

## Alpha Testing

| Test Number | Test Method | Expected Result | Test Result |
| --- | --- | --- | --- |
| M1.1 | Log in to the system with valid existing employee credentials. | User is authenticated and redirected to the employee dashboard. | 00:23:15 – 00:52:29 PASS |
| M1.2 | Attempt system login with invalid credentials. | Login is rejected with appropriate error message. | 00:53:14 – 01:35:15 PASS |
| M2.1 | Load the employee dashboard. | Dashboard loads with the correct data, stats cards, calendar and action boxes visible.  | 01:35:00 – 02:07:06 PASS |
| M3.1 | Create new management user | New management user is created and appears in the user list in the UI. Data persisted after a page refresh. | 02:07:21 – 02:56:16 PASS |
| M4.1 | Create a shift via the management Shifts page using the modal. | Shift is saved and visible on both the management calendar and employee calendar. | 02:57:01 – 03:56:02 PASS |
| M4.2 | Edit an existing shift via the management Shifts page using the modal. | Shift updates correctly on the calendar – Data persists after page reload. | 03:56:17 – 04:45:18 PASS |
| M4.3 | Delete a shift via the management Shifts page. | Shift is removed from both the employee and management views. | 04:46:03 – 05:16:18 PASS |
| M5.1 | Submit a cover request for a shift. | Cover request is saved and visible to management. | 05:17:03 – 06:01:26 PASS |
| M6.1 | Submit a PTO request. | PTO request is stored and marked pending. Visible in management dashboard. | 06:02:11 – 05:59:11 PASS |
| M6.2 | Approve a PTO request in the management dashboard. | PTO request is approved and applied. | 06:59:26 – 8:00:29 PASS |
| M7.1 | Use reassignment wizard to reassign a shift. | Shift is reassigned to selected employee. | 06:59:26 – 8:00:29 PASS |
| M8.1 | Clock in as an employee to an upcoming shift. | Active clock-in session is started. | 08:01:06 – 08:35:23 PASS |
| M9.1 | Generate payroll report for previous month. | Payroll modal showed users and worked hours. | 08:36:08 – 09:08:05 PASS |
| M9.2 | Trigger payroll email job | Payroll emails are sent to users and admin. | 09:08:20 – 09:59:08 PASS |
| M10.1 | Create and delete a tag | Tag should be created and shown in the UI, then after deletion should subsequently be removed. Refreshes should show persistence. | 09:59:23 – 10:38:15 PASS |
| M11.1 | View audit log as management user. | Audit log modal loads with paginated entries. | 10:39:00 – 11:19:02 PASS |
| M12.1 | Update profile information. | Changes are saved and persisted correctly after refresh. | 11:19:17 – 11:56:02 PASS |
| M13.1 | Perform management action and check audit log. | Action should be recorded correctly with details. | 11:56:17 – 12:37:01 PASS |
| M15.1 | Navigate between employee and management systems. | Data remains consistent across views. | 12:37:16 – 13:20:14 PASS |

## Stakeholder Testing

For this section, my two previously mentioned stakeholders were involved in the evaluative testing of the project. The first being my close friend Dylan Sully, an employee of a business which uses a competing workforce and rota management system, allowing his experience with competitive products to provide comparative feedback, and the second being Faruk Ekin – my boss – who currently manages staff rotas through manual mediums such as paper tables and excel spreadsheets, who was able to evaluate the system from the perspective of a small business owner looking to transition from a non-digital solution.

Therefore, to gather comprehensive feedback from the aforenamed stakeholders, I created three sets of testing tasks – tailored to the specific stakeholder – to complete, organised below into three categories, functional, robustness and useability tests. Aiming to have Dylan Sully completing employee side tests, and Faruk Ekin completing management side tests. These three sets of tests will allow for detailed feedback from stakeholders when attempting to complete the assigned tasks, allowing for real world usage data to be gathered.

### Functional Test Plan

| Test Number |  Test Description | Stakeholder 1 Feedback (Faruk Ekin) | Stakeholder 2 Feedback (Dylan Sully) |
| --- | --- | --- | --- |
| F1 | Create and edit a shift using the management calendar. |  | N/A |
| F2 | Generate a rota for the upcoming week for multiple employees. |  | N/A |
| F3 | Approve a PTO request. |  | N/A |
| F4 | Reassign a shift covered by a PTO date range using the reassignment wizard. |  | N/A |
| F5 | Generate a payroll report for the current month. |  | N/A |
| F6 | Create an employee. |  | N/A |
| F7 | Submit a PTO request over a period with an existing shift. | N/A |  |
| F8 | Submit a cover request for a shift. | N/A |  |
| F9 | Clock in and clock out. | N/A |  |

### Robustness Test Plan

| Test Number | Test Description | Stakeholder 1 Feedback (Faruk Ekin) | Stakeholder 2 Feedback (Dylan Sully) |
| --- | --- | --- | --- |
| R1 | Submit PTO request overlapping existing shifts. | N/A |  |
| R2 | Attempt to clock in twice without clocking out. | N/A |  |
| R3 | Attempt to access management features as employee. | N/A |  |
| R4 | Submit incomplete shift creation form. |  | N/A |
| R5 | Attempt to create a shift with the end date before the start date. |  | N/A |

### Useability Test Plan

| Test Number | Test Description | Stakeholder 1 Feedback (Faruk Ekin) | Stakeholder 2 Feedback (Dylan Sully) |
| --- | --- | --- | --- |
| U1 | Create a new shift without any guidance. |  | N/A |
| U2 | Navigate between the employee and management dashboards. |  | N/A |
| U3 | Locate the payroll page and generate a report without guidance. |  | N/A |
| U4  | Use the employee dashboard without guidance. | N/A |  |
| U5 | Locate and submit a PTO request. | N/A |  |

### Functional Testing

| Test Number |  Test Description | Stakeholder 1 Feedback (Faruk Ekin) | Stakeholder 2 Feedback (Dylan Sully) |
| --- | --- | --- | --- |
| F1 | Create and edit a shift using the management calendar. | “When I attempted to create a shift I found it very easy, the buttons were large and easy to find and the Calendar UI was a clear and easy way to verify changes and view all shifts.” | N/A |
| F2 | Generate a rota for the upcoming week for multiple employees. | “When I was adding in all the shifts from one of my paper rotas, all the shifts were generated and displayed correctly. This saved me significant time compared to drawing out a rota manually.” | N/A |
| F3 | Approve a PTO request. | “Approving a PTO request was very simple, the layout of the PTO page with tabs to single out pending requests and ability to check past approved requests solved previous issues I had with losing track of employee PTO in long chats in WhatsApp.” | N/A |
| F4 | Reassign a shift covered by a PTO date range using the reassignment wizard. | “When I approved a PTO request that had shifts within its date range the reassignment wizard appeared as expected, and it successfully guided me through reassigning these shifts successfully, reducing scheduling conflicts and sorting out replacements for shifts instantly.” | N/A |
| F5 | Generate a payroll report for the current month. | “I generated the payroll report, and it accurately reflected hours worked and PTO. A stark comparison to my current system in which I task employees with time tracking.” | N/A |
| F6 | Create an employee. | “Very easy to use, clear and the inclusion of validation helped guide me through the process.” | N/A |
| F7 | Submit a PTO request over a period with an existing shift. | N/A | “I was instantly able to submit a PTO request as the form to do so was instantly accessible after logging in. Very simple compared to the system I use currently.” |
| F8 | Submit a cover request for a shift. | N/A | “The inclusion of a cover request button on the shift itself in the calendar made it highly accessible and easy to request.” |
| F9 | Clock in and clock out. | N/A | “This feature worked as I expected it to with preexisting knowledge of the current system used at work. It also directly prevented double clock ins to shifts.” |

### Robustness Testing

| Test Number | Test Description | Stakeholder 1 Feedback (Faruk Ekin) | Stakeholder 2 Feedback (Dylan Sully) |
| --- | --- | --- | --- |
| R1 | Submit PTO request overlapping existing shifts. | N/A | “The app allowed me to submit the request as expected, giving me a summary of the shifts my date range would cover and paid PTO hours I would be using prior to submission.” |
| R2 | Attempt to clock in twice without clocking out. | N/A | “The option was directly not presented, with the clock in button completely hidden while clocked in to a shift currently.” |
| R3 | Attempt to access management features as employee. | N/A | “I navigated to the URL provided and saw a 404 Not Found message, indicating clearly I had navigated to the wrong page, and facilitated navigation back to the /home page.” |
| R4 | Submit incomplete shift creation form. | “I was unable to click the submit button, and a popup alert appeared asking me to fill in the missing required fields of the form.” | N/A |
| R5 | Attempt to create a shift with the end date before the start date. | “The system prevented me from submitting the creation request with invalid dates, presenting the error in the same manner as before – a helpful feature as I tend to do things fast without checking over them.” | N/A |

### Useability Testing

| Test Number | Test Description | Stakeholder 1 Feedback (Faruk Ekin) | Stakeholder 2 Feedback (Dylan Sully) |
| --- | --- | --- | --- |
| U1 | Create a new shift without any guidance. | “I was easily able to do this. I found the Shift management page easily, and the create shift button was clearly identifiable. The modal containing the form was also very easy to use, providing a date picker for the dates and a dropdown for tag selection.” | N/A |
| U2 | Navigate between the employee and management dashboards. | “This was also very simple, the management navigation item in the employee dashboard which I arrived on after logging in was highlighted differently to the rest making it easy to identify, with the same situation and highlighting present in the management dashboard.” | N/A |
| U3 | Locate the payroll page and generate a report without guidance. | “The payroll page was also very easy to locate from the sidebar options using descriptive titles and icons. Locating the payroll generation button was also easy due to it being the only button available on the page and it being consistent with the rest of the platform’s buttons.” | N/A |
| U4  | Use the employee dashboard without guidance. | N/A | “The dashboard was very easy to figure out, much simpler to use than the current platform used by my employers while retaining the same functionality. I enjoyed the grouping of all features onto the main home page, keeping all actions and data clearly visible to me.” |
| U5 | Locate and submit a PTO request. | N/A | “This feature was very easy to find due to all actions and data being kept on the main employee homepage, it was also very easy to submit the request itself due to the use of date and time pickers and the summary of time and shifts missed between the provided dates.” |

