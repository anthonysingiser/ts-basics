
interface Run {
    miles: number;
}

function updateRunGoal(run: Run) {
    console.log(`
  Miles left:       ${50 - run.miles}
  Percent of goal:  ${(run.miles / 50) * 100}% complete
    `);
}

updateRunGoal({
    miles: 5,
});

// interface Directory {
//     addFile: (name: string) => void;
//     config: {
//         default: {
//             encoding: string;
//             permissions: string;
//         };
//     };
// }

//rewriting previous Directory type with composed types
interface Directory {
    addFile: (name: string) => void;
    config: Config
}

interface DefaultConfig {
    encoding: string;
    permissions: string;
}

interface Config {
    default: DefaultConfig
}

class DesktopDirectory implements Directory {
    config = {
        default: {
            encoding: "utf-8",
            permissions: "drw-rw-rw",
        },
    };

    addFile(name: string) {
        console.log(`Adding file: ${name}`);
    }

    showPreview(name: string) {
        console.log(`Opening preview of file: ${name}`);
    }
}

const Desktop = new DesktopDirectory();

Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');
console.log(Desktop.config)