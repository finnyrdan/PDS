Check your system has node version installed
    if yes
        check the version
            version of Node.js runs on your system, run node -v in a terminal window.
                -current version v14.17.1
Check the Node PACKAGE Manager
    To check that version of npm, run npm -v in a terminal window.
To install the Angular CLI, open a terminal window and run the following command:
        npm install -g @angular/cli

To check the details of angular project
        ng version
        Current Details
            Angular CLI: 12.2.18
            Node: 14.17.1
            Package Manager: npm 6.14.13

To run the project locally
        ng serve --open
        type ng serve then open your browser on http://localhost:4200/
Enable NPM Scripts
        enable the npm scripts from explorer top right 3 dots.
How to add Shared components
        -create a component in Shared/components
        -add the component in exports section of module.ts file
        -use the selector name in required places