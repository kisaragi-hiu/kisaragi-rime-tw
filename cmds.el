;;; cmds.el --- summary -*- lexical-binding: t -*-

;;; Commentary:

;; Emacs commands for managing essay-tw.txt and other stuff in this repository.

;;; Code:

(require 'sort)

(defun essay.txt:next-duplicate ()
  "Find the next duplicate in essay.txt."
  (interactive)
  ;; For interactive search, paste this in: ^\(?1:.*?\)\t.*?\n\1\t
  ;; That is the unescaped version of the regexp below.
  (re-search-forward
   (rx bol (group-n 1 (*? any)) "\t" (*? any) "\n"
       (backref 1) "\t")
   nil t))

(defun essay.txt:sort ()
  "Sort essay.txt."
  (interactive)
  (let ((sort-fold-case t))
    (sort-lines nil (point-min) (point-max))))

(provide 'cmds)

;;; cmds.el ends here
