CREATE TABLE students (
    ID int,
    name varchar(20),
    major varchar(20),
    year YEAR,
    phoneNum int,
    address varchar(50),
    total_credit int default 0,
    avg_credit double default 0.0,
    is_attending tinyint(1) default 1,
    PRIMARY KEY(ID)
) ENGINE=InnoDB