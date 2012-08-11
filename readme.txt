Specification for QADriver: =========================== 
QA-Driver reference specification for implementing TestDriver & WebDriver 

jQuery, Ringmark testsuites are clubbed with QADriver. 
jQuery, Ringmark are trademarks/copyrighted by their respective owners, and are authored by their respective teams. 
We do not change code of referenced testsuites. We respect their effort, and acknowledge our gratitude for making them available. All we do is to merge it with QADriver, to facilitate automated execution of array of testsuites from various mentors. 
1. TestCases[c], let total testcases count be referenced using variable "c" 1.1. Declaration: 1.1.1. JSON-Nodes 1.1.2. Array of strings 1.2. Definition: 1.2.1. Ensure JSON-Nodes array is assigned a valid URI for each testcase. 1.2.2. Array of strings - Consider having a common base URI if possible. 
Execution (validCaseURLs[], invalidCaseURLs[]) 2.1. Read testcase URI from TestCases[i]. 2.2. Verify validity using Pre-fetch javascript snippet. 2.2.1. If referenced resource fetches a proper response then 2.2.1.1. Increment count of valid URLs (Say, i), and 2.2.1.2. assign the URL as string to array "ValidTests[i]" 2.2.2. Else, if reference is invalid/undefined (Not applicable in context of Application-Layer. A testcase can be negative scenario having an intentional malfunctioning. Example, testing HTTP response code 404 handler.) 2.2.1.1. Increment count of invalid URLs (Say, k), and 2.2.1.2. assign the URL as string to array "InvalidTests[k]" 
An optional step to verify "c = i + k" can be used for tallying total testcases count. 
Browsing context - Individual testcase scope provided using iFrame/Window. 
"Preferences" either using JSON-format/hardcoded, contains "SnapshotCount". It represents the number of Browsing-contexts maintained for executing testcases. "ContextType" is a preference, that indicates whether "iFrame" should be used, or "Window" be used for instantiating every testcase for execution. 
