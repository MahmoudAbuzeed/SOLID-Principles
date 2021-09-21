/*
Dependency Inversion Principle (DIP)

High level modules should not depend upon low level modules, Both should depend on abstractions.
Abstractions should not depend on details. Details should depend upon abstractions.
One popular way to comply with this principle is through the use of a dependency inversion pattern, although this method is not the only way to do so.
Whatever method you choose to utilize, finding a way to utilize this principle will make your code more flexible, agile, and reusable.
*/

// Bad Example
class FileSystem {
  writeToFile(data) {
    console.log("Data written to file => ", data);
  }
}

class ExternalDB {
  writeToDatabase(data) {
    console.log("Data written to database => ", data);
  }
}

class LocalPersistance {
  push(data) {
    console.log("Data pushed => ", data);
  }
}
class PersistanceManager {
  saveData(db, data) {
    if (db instanceof FileSystem) db.writeToFile(data);
    if (db instanceof ExternalDB) db.writeToDatabase(data);
    if (db instanceof LocalPersistance) db.push(data);
  }
}

const persistanceManager = new PersistanceManager();
const fileSystem = new FileSystem();
const externalDB = new ExternalDB();
const localPersistance = new LocalPersistance();
persistanceManager.saveData(fileSystem, "File system data"); // Data written to file =>  File system data
persistanceManager.saveData(externalDB, "External dataBase data"); // Data written to database =>  External dataBase data
persistanceManager.saveData(localPersistance, "Local persistance data"); // Data pushed =>  Local persistance data

// In this case, a high-level module PersistanceManager depends on the low-level modules, which are FileSystem, ExternalDB, and LocalPersistance.

/*
Good Example
To avoid the issue in this simple case we should probably do something like this:
*/
// class FileSystem {
//   save(data) {
//     console.log("Data written to file => ", data);
//   }
// }

// class ExternalDB {
//   save(data) {
//     console.log("Data written to database => ", data);
//   }
// }

// class LocalPersistance {
//   save(data) {
//     console.log("Data pushed => ", data);
//   }
// }

// class PersistanceManager {
//   saveData(db, data) {
//     db.save(data);
//   }
// }

// const persistanceManager = new PersistanceManager();
// const fileSystem = new FileSystem();
// const externalDB = new ExternalDB();
// const localPersistance = new LocalPersistance();
// persistanceManager.saveData(fileSystem, "File system data"); // Data written to file =>  File system data
// persistanceManager.saveData(externalDB, "External dataBase data"); // Data written to database =>  External dataBase data
// persistanceManager.saveData(localPersistance, "Local persistance data"); // Data pushed =>  Local persistance data
