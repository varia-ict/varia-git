# varia-git

## Setup

    git clone https://github.com/varia-ict/varia-git.git
 
    git checkout -b student/$YOUR_GITHUB_ACCOUNT

    git push --set-upstream student/$YOUR_GITHUB_ACCOUNT

## Exercise 1:

* You should add a bunch of branches to this repository.

* Everytime you create a new branch, add one file to the branch which is located at the root level of this repository. The name of the file should be the same as the branch name.

* Also add readme.md file to the first branch you add (whose name is equal to your github username). Put all the commands you used in the command line in this exercise to that file. The commands should be in the order you used them in. 

The branch names and their dependencies should be like this:

    develop 
        - $your_github_account 
            - $your_github_account_exercise_1
            - $your_github_account_exercise_2
            - $your_github_account_exercise_3
                - $your_github_account_fixes_to_exercise_3

<b>You should have added 5 branches and 6 files in total in this exercise.</b>

## Exercise 2:.

* You should create your own repository and add a bunch of branches to it. 

* Everytime you create a new branch, add one file to the branch which is located at the root level of this repository. The name of the file should be the same as the branch name.

* Also add readme.md file to your develop branch. That branch should also be the default branch in GitHub. Put all the commands you used in the command line in this exercise to that file. The commands should be in the order you used them in. 

The branch names and their dependencies should be like this:

    master
	    - master_1.0.1

    develop
        - fancy_new_feature
            - bug_fixes_to_fancy_new_feature
        - not_so_fancy_new_feature
        - cool_upcoming_feature
        - release_candidate
            - fancy_new_feature
                - bug_fixes_to_fancy_new_feature
            - not_so_fancy_new_feature	

<b>You should have added 8 branches and 9 files in total in this exercise.</b>

After you have done this, invite two other students and the teacher to the repository. Ask the students to add their own branches to your repo.

    develop
        - $students_github_account

