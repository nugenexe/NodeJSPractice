


--SQL Server database with the following 3 tables: please write the statement that would provide you with a list of account numbers along with the business manager's name on the account and the name and address of the account owner in account number order?



SELECT m.managerTitle, ad.* FROM Accounts a (NOLOCK) 
INNER JOIN Managers m (NOLOCK)
ON a.accountMAnagerID = m.mangerID
INNER JOIN AccountDetails ad (NOLOCK)
ON a.accountID = ad.accountID
ORDER BY a.accountID

--trans level, read uncommited 
--if on update, other sources read uncommited data



