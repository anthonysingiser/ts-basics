
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

interface Directory {
    addFile: (name: string) => void;
}

class DesktopDirectory implements Directory {
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