import {SQLiteDatabase} from 'react-native-sqlite-storage';
import {Transaction} from '../types';

export const addTransaction = async (
  db: SQLiteDatabase,
  Transaction: Transaction,
) => {
  const insertQuery = `
     INSERT INTO Transactions (type, category, amount, description, date)
     VALUES (?, ?, ?, ?, ?)
   `;
  const values = [
    Transaction.type,
    Transaction.category,
    Transaction.amount,
    Transaction.description,
    Transaction.date,
  ];
  try {
    return db.executeSql(insertQuery, values);
  } catch (error) {
    console.error(error);
    throw Error('Failed to add transaction');
  }
};

export const getTransactions = async (
  db: SQLiteDatabase,
): Promise<Transaction[]> => {
  try {
    const transactions: Transaction[] = [];
    const results = await db.executeSql('SELECT * FROM Transactions');
    results?.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        transactions.push(result.rows.item(index));
      }
    });
    return transactions;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get transactions from database');
  }
};

// export const updateContact = async (
//   db: SQLiteDatabase,
//   updatedContact: Transaction,
// ) => {
//   const updateQuery = `
//     UPDATE Transactions
//     SET type = ?, category = ?, phoneNumber = ?
//     WHERE id = ?
//   `;
//   const values = [
//     updatedContact.firstName,
//     updatedContact.name,
//     updatedContact.phoneNumber,
//     updatedContact.id,
//   ];
//   try {
//     return db.executeSql(updateQuery, values);
//   } catch (error) {
//     console.error(error);
//     throw Error("Failed to update contact");
//   }
// };

// export const deleteContact = async (db: SQLiteDatabase, contact: Contact) => {
//   const deleteQuery = `
//     DELETE FROM Contacts
//     WHERE id = ?
//   `;
//   const values = [contact.id];
//   try {
//     return db.executeSql(deleteQuery, values);
//   } catch (error) {
//     console.error(error);
//     throw Error("Failed to remove contact");
//   }
// };
