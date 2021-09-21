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
