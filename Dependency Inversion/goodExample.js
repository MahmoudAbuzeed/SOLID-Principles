class FileSystem {
  save(data) {
    console.log("Data written to file => ", data);
  }
}

class ExternalDB {
  save(data) {
    console.log("Data written to database => ", data);
  }
}

class LocalPersistance {
  save(data) {
    console.log("Data pushed => ", data);
  }
}

class PersistanceManager {
  saveData(db, data) {
    db.save(data);
  }
}

const persistanceManager = new PersistanceManager();
const fileSystem = new FileSystem();
const externalDB = new ExternalDB();
const localPersistance = new LocalPersistance();
persistanceManager.saveData(fileSystem, "File system data"); // Data written to file => File system data
persistanceManager.saveData(externalDB, "External dataBase data"); // Data written to database => External dataBase data
persistanceManager.saveData(localPersistance, "Local persistance data"); // Data pushed => Local persistance data
