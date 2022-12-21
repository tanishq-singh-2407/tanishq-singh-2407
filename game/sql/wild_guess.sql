CREATE TABLE wild_guess (
  issue_number INT PRIMARY KEY NOT NULL,
  username VARCHAR(60) NOT NULL,
  guessed_number INT2 NOT NULL,
  actual_number INT2 NOT NULL,
  created_at TIMESTAMP WITH time zone DEFAULT TIMEZONE('utc'::TEXT, NOW()) NOT NULL
);