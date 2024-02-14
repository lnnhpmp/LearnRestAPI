/**
 * Setup the Database URL
 */

 // mongodb+srv://admin:<password>@cluster0-46e5h.mongodb.net/test?retryWrites=true&w=majority

const DB_USER = "admin"
const DB_PASSWORD = "fangyuadmin1993"
const DB_NAME = "acmetravel"
const CLUSTER_HOST = "cluster0.dleslth.mongodb.net"

// Setup the DB URI
exports.DB_URI= "mongodb+srv://"+DB_USER+":"+DB_PASSWORD+"@"+CLUSTER_HOST+"/"+DB_NAME+"?retryWrites=true&w=majority"