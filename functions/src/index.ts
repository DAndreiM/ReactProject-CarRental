import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.checkAdmin = functions.https.onCall(async (data, context) => {
    try{
        if(!context.auth){
            throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated !');
        }

        const idToken = data.idToken;

        const decodedToken = await admin.auth().verifyIdToken(idToken);

        if(!decodedToken.admin){
            throw new functions.https.HttpsError('permission-denied', 'User is not an admin');
        }
        return {isAdmin: true};
        }catch(error)
    {
        throw new functions.https.HttpsError('internal', 'Failed to check user status !')
    }
})

exports.setAdmin = functions.https.onCall(async (data, context) => {
    try{
        if(!context.auth){
            throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated !');
        }

        if(!context.auth.token.admin){
            throw new functions.https.HttpsError('permission-denied', "You don't have the required privileges !")
        }

        const userId = data.userId;

        await admin.auth().setCustomUserClaims(userId, {admin: true});

        return {message: 'User is now an admin.'}

    }catch(error){
        throw new functions.https.HttpsError('internal', 'Failed to set admin !')
    }
})
