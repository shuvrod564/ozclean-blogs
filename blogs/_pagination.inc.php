    <nav aria-label="Blog Page Navigation">
        <ul class="pagination justify-content-center mt-5 pt-lg-5" id="blogPagination">
            <?php if( $firstArrow === 'true' ) { ?> 
                <li class="page-item">
                    <a class="page-link" href="<?php echo $prevPageUrl; ?>" aria-label="Previous">
                        <span aria-hidden="true" class="fa fa-angle-double-left"></span>
                    </a>
                </li>
            <?php } ?>
            <!--  -->
            <?php if( $active === '1' ) { ?> 
                <li class="page-item"><a class="page-link active" href="index.php">1</a></li>
            <?php } else { ?> 
                    <li class="page-item"><a class="page-link" href="index.php">1</a></li>
            <?php } ?> 
            <!--  -->
            <?php if( $active === '2' ) { ?> 
                <li class="page-item"><a class="page-link active" href="page-2.php">2</a></li>
            <?php } else { ?> 
                    <li class="page-item"><a class="page-link" href="page-2.php">2</a></li>
            <?php } ?> 
            <!--  -->
            <?php if( $active === '3' ) { ?> 
                <li class="page-item"><a class="page-link active" href="page-3.php">3</a></li>
            <?php } else { ?> 
                    <li class="page-item"><a class="page-link" href="page-3.php">3</a></li>
            <?php } ?> 
 
            <?php if( $lastArrow === 'true' ) { ?> 
                <li class="page-item">
                    <a class="page-link" href="<?php echo $nextPageUrl; ?>" aria-label="Next">
                        <span aria-hidden="true" class="fa fa-angle-double-right"></span>
                    </a>
                </li>
            <?php } ?>
        </ul>
    </nav>